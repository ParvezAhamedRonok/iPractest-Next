
export function Check_duplicate_words(text) {
    let Duplicatecount = 0;
    let array = ["first", "firstly", "secondly", "thirdly", "furthermore", "finally", "begin", "conclude", "next", "example", "instance",
        "follow", "that", "case", "namely", "other", "words", "also", "moreover", "more", "addition", "besides", "above", "well", "same", "way",
        "only", "also", "general", "generally", "whole", "rule", "most", "part", "cases", "usually", "so", "therefore", "result", "consequence", "accordingly", "consequently", "because", "thus", "particular", "particularly", "especially", "mainly", "hence", "this", "reason", "under", "these", "circumstances", "then", "simply", "put", "otherwise", "implies", "if", "not", "obviously", "clearly", "naturally", "course", "expected", "can", "as", "surely", "after", "all", "rather", "alternative", "another", "would", "possibility", "instead", "conversely", "on", "contrast", "comparison", "even", "though", "however", "much", "nevertheless", "still", "yet",

    ];
    for (let i = 0; i < array.length; i++) {
        if (text.includes(array[i])) {
            // console.log(array[i])
            Duplicatecount++;

        }
    }
    console.log(Duplicatecount)
    return Duplicatecount
}
