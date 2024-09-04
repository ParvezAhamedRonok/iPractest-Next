import React from 'react';

function ProjectHomeOne({ className }) {
    return (
        <>
            <section className={`appie-project-3-area ${className} `}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="
                appie-project-3-box
                d-block d-md-flex
                justify-content-between
                align-items-center
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <h4 className="title">
                                    Start your Mock Test <br />
                                    with iPractest.
                                </h4>
                                <a className="main-btn" href="/empty">
                                    Let’s Begin
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
