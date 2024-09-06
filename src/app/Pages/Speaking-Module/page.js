"use client"
import React, { useEffect } from 'react';
import SpeakingCards from "../Speaking-Module/Speaking-Test-Cards/index"

export default function page() {
    useEffect(() => {

        // On document load resolve the Speech SDK dependency
        function Initialize(onComplete) {
            if (!!window.SpeechSDK) {
                console.log(window.SpeechSDK)

                onComplete(window.SpeechSDK);
            }
        }

        // status fields and start button in UI
        var resultsDiv,
            eventsDiv,
            talkingHeadDiv,
            highlightDiv;
        var startSynthesisAsyncButton, pauseButton, resumeButton, downloadButton;
        var updateVoiceListButton;

        // subscription key and region for speech services.
        var subscriptionKey, regionOptions;
        var authorizationToken;
        var voiceOptions, isSsml;
        var SpeechSDK;
        var synthesisText;
        var synthesizer;
        var player;
        var wordBoundaryList = [];


        function getAudioConfig() {
            // If an audio file was specified, use it. Otherwise, use the microphone.
            // Depending on browser security settings, the user may be prompted to allow microphone use. Using
            // continuous recognition allows multiple phrases to be recognized from a single use authorization.
            if (audioFile) {
                return SpeechSDK.AudioConfig.fromWavFileInput(audioFile);
            } else if (inputSourceFileRadio.checked) {
                alert('Please choose a file when selecting file input as your audio source.');
                return;
            } else if (microphoneSources.value) {
                return SpeechSDK.AudioConfig.fromMicrophoneInput(microphoneSources.value);
            } else {
                return SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
            }
        }

        function getPronunciationAssessmentConfigFromJson() {
            var pronunciationAssessmentConfig = new SpeechSDK.PronunciationAssessmentConfig.fromJSON(
                "{\"GradingSystem\": \"HundredMark\", \
          \"Granularity\": \"Phoneme\", \
          \"EnableMiscue\": \"True\", \
          \"EnableProsodyAssessment\": \"True\", \
          \"ScenarioId\": \"[scenario ID will be assigned by product team]\"}"
            );
            pronunciationAssessmentConfig.referenceText = referenceText.value;
            return pronunciationAssessmentConfig;
        }

        window.pronunciationAssessmentConfiguredWithJson = function () {


            var audioConfig = getAudioConfig();
            var speechConfig = SpeechSDK.SpeechConfig.fromSubscription('aecab240c90c4e839dd7d2db35d8be9f', 'eastus');
            var pronunciationAssessmentConfig = getPronunciationAssessmentConfigFromJson();
            if (!audioConfig || !speechConfig || !pronunciationAssessmentConfig) return;

            // Create the SpeechRecognizer and set up common event handlers and PhraseList data
            reco = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
            applyCommonConfigurationTo(reco);

            // Apply pronunciation assessment config to recognizer.
            pronunciationAssessmentConfig.applyTo(reco);

            // Note: in this scenario sample, the 'recognized' event is not being set to instead demonstrate
            // continuation on the 'recognizeOnceAsync' call. 'recognized' can be set in much the same way as
            // 'recognizing' if an event-driven approach is preferable.
            reco.recognized = undefined;

            // Note: this scenario sample demonstrates result handling via continuation on the recognizeOnceAsync call.
            // The 'recognized' event handler can be used in a similar fashion.
            reco.recognizeOnceAsync(
                function (successfulResult) {
                    onRecognizedResult(successfulResult);
                },
                function (err) {
                    window.console.log(err);
                    phraseDiv.innerHTML += "ERROR: " + err;
                }
            );
        }
        document.addEventListener("DOMContentLoaded", function () {
            startSynthesisAsyncButton = document.getElementById("startSynthesisAsyncButton");




            window.starSynthesis = function (text) {

                synthesisText = document.getElementById("synthesisText");

                // if we got an authorization token, use the token. Otherwise use the provided subscription key
                var speechConfig;

                speechConfig = SpeechSDK.SpeechConfig.fromSubscription('aecab240c90c4e839dd7d2db35d8be9f', 'eastus');
                speechConfig.speechSynthesisVoiceName = 'en-US-JennyNeural';
                speechConfig.speechSynthesisOutputFormat = SpeechSDK.SpeechSynthesisOutputFormat.Audio24Khz48KBitRateMonoMp3;

                player = new SpeechSDK.SpeakerAudioDestination();

                player.onAudioStart = function (_) {

                    document.getElementById("transcriptText").style.display = "none";
                    document.getElementById("SpeakingState").innerHTML = "Examiner is speaking...";
                    window.console.log("playback started");
                    window.speechFinished = false;
                    window.onAudionStartGlobal();
                    setTimeout(function () { $("svg path :first-child").each(function (i) { this.beginElement(); }); }, 0.5);
                }
                player.onAudioEnd = function (_) {
                    document.getElementById("SpeakingState").innerHTML = "Waiting for your Speech...";
                    window.console.log("playback finished");
                    window.speechFinished = true;
                    window.resetTranscriptG();
                    window.onAudionEndGlobal();
                    document.getElementById("transcriptText").style.display = "block";
                };

                var audioConfig = SpeechSDK.AudioConfig.fromSpeakerOutput(player);

                synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);

                // The event synthesizing signals that a synthesized audio chunk is received.
                // You will receive one or more synthesizing events as a speech phrase is synthesized.
                // You can use this callback to streaming receive the synthesized audio.
                synthesizer.synthesizing = function (s, e) {
                    window.console.log(e);

                };
                // The synthesis started event signals that the synthesis is started.
                synthesizer.synthesisStarted = function (s, e) {
                    window.console.log(e);

                };

                // The event synthesis completed signals that the synthesis is completed.
                synthesizer.synthesisCompleted = function (s, e) {
                    console.log(e);

                };

                // The event signals that the service has stopped processing speech.
                // This can happen when an error is encountered.
                synthesizer.SynthesisCanceled = function (s, e) {

                    window.console.log(e);

                };



                const complete_cb = function (result) {
                    if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
                        //resultsDiv.innerHTML += "synthesis finished";
                    } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
                        //resultsDiv.innerHTML += "synthesis failed. Error detail: " + result.errorDetails;
                    }
                    window.console.log(result);
                    synthesizer.close();
                    synthesizer = undefined;
                };
                const err_cb = function (err) {

                    window.console.log(err);
                    synthesizer.close();
                    synthesizer = undefined;
                };
                window.playerG = player;
                synthesizer.speakTextAsync(text,
                    complete_cb,
                    err_cb);
            };



            Initialize(function (speechSdk) {
                SpeechSDK = speechSdk;

            });
        });


    }, [])


    return (
        <div>
            <SpeakingCards />
        </div>
    )
}
