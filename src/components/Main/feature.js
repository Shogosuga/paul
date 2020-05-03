import React, {Component} from 'react';


class Feature extends Component {
    render() {
        return (
            <div>
                <section className="feature-section section" id="feature-section">
                    <div className="l-inner">
                        <div className="section-title-block">
                            <h2 className="section-title">FEATURE</h2>
                            <p className="section-desc">
                              最新の制作実績です。
                            </p>
                        </div>
                        <div className="two-column-wrapper">
                            <div className="two-column-image">
                                <img src="img/feature/feature.jpg" alt="">
                                </img>
                            </div>
                            <div className="two-column-desc">
                                <p className="text">
                                    作品タイトル：神経細胞研究室　HP<br /> 担当：Design / Coding / WordPress<br /> 制作期間：1ヶ月
                                    <br /> URL：
                                    <a href="http://park.itc.u-tokyo.ac.jp/Hirabayashi/WordPress/jp/">http://park.itc.u-tokyo.ac.jp/Hirabayashi/WordPress/jp/</a><br />
                                    <br /> コメント：ここにJavaScriptを導入しようと考えています
                                    <br /> デザイン案等教えてください
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};

export default Feature;