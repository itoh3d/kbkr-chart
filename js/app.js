//データセット

var kabu_datasets = [

    { label : '2525mementomori' , data : [{ x : 305.2, y: 75, r: 2.8 }]},{ label : 'MrRabbit9119' , data : [{ x : 177.8, y: 64, r: 2.8 }]},{ label : 'fugo_hahahablog' , data : [{ x : 167.5, y: 63, r: 2.8 }]},{ label : 'so19715552' , data : [{ x : 112, y: 53, r: 2.8 }]},{ label : 'duck_stock' , data : [{ x : 105, y: 51, r: 2.8 }]},{ label : 'sistinavc' , data : [{ x : 78, y: 2841, r: 22.7 }]},{ label : 'futsuubito' , data : [{ x : 77.3, y: 1062, r: 13.9 }]},{ label : 'reuse_theta' , data : [{ x : 74.1, y: 43, r: 2.8 }]},{ label : 'fujitaxian' , data : [{ x : 53, y: 35, r: 2.8 }]},{ label : 'MUCHO84928709' , data : [{ x : 49, y: 236, r: 7.6 }]},{ label : 'FAA_X64' , data : [{ x : 48.2, y: 33, r: 2.8 }]},{ label : 'RokuSQ_All' , data : [{ x : 42, y: 30, r: 2.8 }]},{ label : 'pav_kabu' , data : [{ x : 39.9, y: 29, r: 2.8 }]},{ label : 'takede3' , data : [{ x : 37.1, y: 27, r: 2.8 }]},{ label : 'itoh3d' , data : [{ x : 30.1, y: 768, r: 16.2 }]},{ label : 's13776387' , data : [{ x : 28, y: 22, r: 2.8 }]},{ label : 'hajimeteosun' , data : [{ x : 27.3, y: 21, r: 2.8 }]},{ label : 'akinorimuraoka' , data : [{ x : 26.3, y: 21, r: 2.8 }]},{ label : 'buraihhh' , data : [{ x : 25.6, y: 131, r: 7.1 }]},{ label : 'investsprinter' , data : [{ x : 24.7, y: 20, r: 2.8 }]},{ label : 'Mashiyama' , data : [{ x : 22.6, y: 18, r: 2.8 }]},{ label : 'Ozii0' , data : [{ x : 21.3, y: 18, r: 2.8 }]},{ label : 'Crescent5225675' , data : [{ x : 21.2, y: 211, r: 9.8 }]},{ label : 'posicx' , data : [{ x : 19.7, y: 307, r: 12.2 }]},{ label : 'Quanta1918' , data : [{ x : 19.7, y: 16, r: 2.8 }]},{ label : 'lmhouqi20W4W82N' , data : [{ x : 18.8, y: 16, r: 2.8 }]},{ label : 'Sasukenokabu' , data : [{ x : 18, y: 214, r: 10.6 }]},{ label : 'heiseistock' , data : [{ x : 17.9, y: 15, r: 2.8 }]},{ label : 'A77777K' , data : [{ x : 16.4, y: 14, r: 2.8 }]},{ label : 'maboooxxx' , data : [{ x : 15.5, y: 13, r: 2.7 }]},{ label : '000kani000' , data : [{ x : 12.8, y: 11, r: 2.8 }]},{ label : 'keeping_safety' , data : [{ x : 12.8, y: 11, r: 2.8 }]},{ label : 'highmix' , data : [{ x : 12.7, y: 11, r: 2.8 }]},{ label : 'ok94098' , data : [{ x : 12.4, y: 11, r: 2.8 }]},{ label : 'strade18644883' , data : [{ x : 12, y: 35, r: 5.1 }]},{ label : 'yshida02161' , data : [{ x : 11, y: 10, r: 2.8 }]},{ label : 'kedamafire' , data : [{ x : 10.4, y: 9, r: 2.8 }]},{ label : 'musou1231' , data : [{ x : 10.4, y: 637, r: 23.2 }]},{ label : 'rabbit_invest' , data : [{ x : 10.1, y: 9, r: 2.8 }]},{ label : 'shibainucyan' , data : [{ x : 10, y: 9, r: 2.8 }]},{ label : 'saki_in' , data : [{ x : 9.4, y: 1041, r: 31.1 }]},{ label : 'akitatomohiro' , data : [{ x : 9.3, y: 114, r: 10.4 }]},{ label : 'syusendokoala' , data : [{ x : 8.7, y: 8, r: 2.8 }]},{ label : 'toushikarasu' , data : [{ x : 8.6, y: 49, r: 7 }]},{ label : 'fujio0702' , data : [{ x : 8.1, y: 7, r: 2.8 }]},{ label : 'TkxQMsTYUZQlFlN' , data : [{ x : 7.7, y: 7, r: 2.8 }]},{ label : 'akagi60' , data : [{ x : 7.4, y: 7, r: 2.8 }]},{ label : 'OhtaResearch' , data : [{ x : 6.6, y: 6, r: 2.8 }]},{ label : 'kabusaga' , data : [{ x : 5.8, y: 6, r: 2.8 }]},{ label : 'ABE_Sato' , data : [{ x : 5.5, y: 5, r: 2.8 }]},{ label : '2004Aki' , data : [{ x : 5.2, y: 5, r: 2.8 }]},{ label : 'free_worker_jp' , data : [{ x : 5.2, y: 72, r: 10.7 }]},{ label : 'k_investment7' , data : [{ x : 5.2, y: 67, r: 10.4 }]},{ label : 'takakatsutoshi3' , data : [{ x : 5.1, y: 5, r: 2.8 }]},{ label : 'castle_pointer' , data : [{ x : 4.8, y: 5, r: 2.8 }]},{ label : 'KabuFactory' , data : [{ x : 4.8, y: 5, r: 2.8 }]},{ label : 'MrKabumania' , data : [{ x : 4.8, y: 5, r: 2.8 }]},{ label : 'micchimicchi14' , data : [{ x : 4.6, y: 4, r: 2.8 }]},{ label : 'ACdc97757716' , data : [{ x : 4.5, y: 4, r: 2.8 }]},{ label : 'pip99577080' , data : [{ x : 4.4, y: 4, r: 2.8 }]},{ label : 'AyMkabu' , data : [{ x : 4.3, y: 21, r: 6.4 }]},{ label : 'castlefrom0' , data : [{ x : 4.3, y: 4, r: 2.8 }]},{ label : 'Zuca69507725' , data : [{ x : 4.2, y: 4, r: 2.8 }]},{ label : 'takefund' , data : [{ x : 4.1, y: 4, r: 2.8 }]},{ label : 'kabukabubanana' , data : [{ x : 4, y: 4, r: 2.8 }]},{ label : 'tarosan_0121' , data : [{ x : 4, y: 4, r: 2.8 }]},{ label : 'EijiroTanaka' , data : [{ x : 3.8, y: 4, r: 2.8 }]},{ label : 'josefire8' , data : [{ x : 3.6, y: 3, r: 2.8 }]},{ label : 'YGkoPanda' , data : [{ x : 3.5, y: 3, r: 2.8 }]},{ label : 'chun3' , data : [{ x : 3.5, y: 53, r: 11.2 }]},{ label : 'kaburiber2' , data : [{ x : 2.5, y: 2, r: 2.8 }]},{ label : 'yasakabu' , data : [{ x : 2.2, y: 2, r: 2.8 }]},{ label : 'welovesfruits' , data : [{ x : 2.2, y: 2, r: 2.8 }]},{ label : 'RedCarrot4' , data : [{ x : 2.1, y: 2, r: 2.8 }]},{ label : 'piDPe9s73i6rnOc' , data : [{ x : 2, y: 2, r: 2.8 }]},{ label : 'sekiro04130808' , data : [{ x : 2, y: 2, r: 2.8 }]},{ label : '0124abc123' , data : [{ x : 1, y: 1, r: 2.8 }]},{ label : 'MrM1101' , data : [{ x : 0.9, y: 1, r: 2.8 }]},{ label : 'momokurin' , data : [{ x : 0.9, y: 1, r: 2.8 }]},{ label : 'ika_toushi' , data : [{ x : 0.5, y: 1, r: 2.8 }]},{ label : 'kai83660' , data : [{ x : 0.4, y: 0, r: 2.8 }]},{ label : 'trader_hashang' , data : [{ x : -1.5, y: 530, r: 52.6 }]},{ label : 'inves_engineer' , data : [{ x : -1.6, y: 5, r: 4.9 }]},{ label : 'sato198358' , data : [{ x : -1.6, y: 2, r: 2.8 }]},{ label : 'yuukabukabu' , data : [{ x : -1.7, y: 37, r: 13.1 }]},{ label : 'icetakashi2020' , data : [{ x : -1.9, y: 2, r: 2.8 }]},{ label : 'ityuuSan' , data : [{ x : -2, y: 2, r: 2.8 }]},{ label : 'nigatsudo15' , data : [{ x : -2.9, y: 3, r: 2.8 }]},{ label : 'Momonga262' , data : [{ x : -3, y: 3, r: 2.8 }]},{ label : 'nobussann' , data : [{ x : -4, y: 4, r: 2.8 }]},{ label : 'okuzawayukichi' , data : [{ x : -6.9, y: 18, r: 4.4 }]},{ label : 'imuvill' , data : [{ x : -12.7, y: 1455, r: 28.2 }]},{ label : 'aaoottoolife' , data : [{ x : -19.1, y: 24, r: 2.8 }]},


];

// 平均・中央値用変換
function getX(Xdata) {
    return Xdata.data[0].x;
};

function getY(Ydata) {
    if (Ydata.data[0].x > 0) {
        return Ydata.data[0].y;
    }
    else {
        return -Ydata.data[0].y;
    }
};

function sum(previousValue, currentValue) {
    return previousValue + currentValue;
}

function median(array) {
    if (array.length === 0) {
        return 0;
    }

    array.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(array.length / 2);

    if (array.length % 2) {
        return array[half];
    } else {
        return (array[half - 1] + array[half]) / 2;
    }
};

var kbkr_y_ave = Math.round(kabu_datasets.map(getY).reduce(sum) / kabu_datasets.length);
var kbkr_y_med = Math.round(median(kabu_datasets.map(getY)));

// リスト用変換
function forList(basedata) {
    var id = basedata.label
    var perform = basedata.data[0].x
    var profit = basedata.data[0].y;
    if (basedata.data[0].x < 0) {
        profit = -basedata.data[0].y;
    }
    var stock = Math.ceil(((2 * basedata.data[0].r) ** 2 * 3.13) / 100) * 100;

    return { "id": id, "perform": perform, "profit": profit, "stock": stock };
};

var kabu_datasets_forlist = kabu_datasets.map(forList);

//チャート描画
var ctx = document.getElementById("myBubbleChart");
var myChart = new Chart(ctx, {
    type: "bubble",

    data: {
        datasets: kabu_datasets,
    },
    hoverRadius: 10,

    options: {
        legend: {
            display: false,
        },

        maintainAspectRatio: false,

        tooltips: {
            enabled: false,

            custom: function (tooltipModel) {
                // ツールチップ要素
                var tooltipEl = document.getElementById("chartjs-tooltip");

                // 最初のレンダリング時に要素を作成する
                if (!tooltipEl) {
                    tooltipEl = document.createElement("div");
                    tooltipEl.id = "chartjs-tooltip";
                    tooltipEl.innerHTML = "<table></table>";
                    document.body.appendChild(tooltipEl);
                }

                // ツールチップがない場合は非表示にします
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // キャレット(ツールチップが指し示すもの)の位置を設定する
                tooltipEl.classList.remove("above", "below", "no-transform");
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add("no-transform");
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // テキストを設定する
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);
                    var innerHtml = "<thead>";

                    titleLines.forEach(function (title) {
                        innerHtml += "<tr><th>" + title + "</th></tr>";
                    });
                    innerHtml += "</thead><tbody>";

                    bodyLines.forEach(function (body, i) {
                        body[0] = body[0].replace("(", "").replace(")", "").replace(/\s+/g, "");
                        var body_content = body[0].split(":");
                        body_content[1] = body_content[1].split(",");

                        var colors = tooltipModel.labelColors[i];
                        var style = "background:" + colors.backgroundColor;
                        style += "; border-color:" + colors.borderColor;
                        style += "; border-width: 2px";
                        var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
                        innerHtml += "<tr><td>" + '<a href="https://twitter.com/' + body_content[0] + '/">' + body_content[0] + "</a>" + "</td></tr>";
                        if (body_content[1][0] >= 0) {
                            innerHtml += "<tr><td>" + "年初来パフォ：+" + body_content[1][0] + " %</td></tr>";
                        } else {
                            innerHtml += "<tr><td>" + "年初来パフォ：" + body_content[1][0] + " %</td></tr>";
                        }

                        if (body_content[1][0] >= 0) {
                            innerHtml += "<tr><td>" + "年間損益：+" + body_content[1][1] + " 万円</td></tr>";
                        } else {
                            innerHtml += "<tr><td>" + "年間損益：-" + body_content[1][1] + " 万円</td></tr>";
                        }
                        var shisan = Math.ceil(((2 * body_content[1][2]) ** 2 * 3.13) / 100) * 100;
                        innerHtml += "<tr><td>" + "総資産：~" + shisan + " 万円</td></tr>";
                    });
                    innerHtml += "</tbody>";

                    var tableRoot = tooltipEl.querySelector("table");
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` はツールチップ全体です
                var position = this._chart.canvas.getBoundingClientRect();

                // スタイル設定
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = "absolute";
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
                tooltipEl.style.caretSize = 5 + "px";

                if (position.width > 500) {
                    console.log("position.width = " + position.width + ", position.width > 500");
                    tooltipEl.style.fontSize = 13 + "px";

                    if (tooltipModel.caretX < position.width / 2) {
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 80 + "px";
                    } else {
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 80 + "px";
                    }
                } else {
                    console.log("position.width = " + position.width + ", position.width < 500");
                    tooltipEl.style.fontSize = 11 + "px";
                    if (tooltipModel.caretX < position.width / 2) {
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 20 + "px";
                    } else {
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 20 + "px";
                    }
                }

                if (tooltipModel.caretY < (position.height * 3) / 4) {
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 10 + "px";
                } else {
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 100 + "px";
                }
            },
        },

        scales: {
            xAxes: [
                {
                    id: "x-axis-0",
                    scaleLabel: {
                        display: true,
                        fontSize: 14,
                        fontFamily: "Kosugi Maru",
                        labelString: "年利回り",
                    },
                    ticks: {
                        fontSize: 12,
                        fontFamily: "Kosugi Maru",
                        callback: function (value, index, values) {
                            return value + "%";
                        },
                    },
                },
            ],
            yAxes: [
                {
                    type: "logarithmic",
                    id: "y-axis-0",
                    scaleLabel: {
                        display: true,
                        fontSize: 14,
                        fontFamily: "Kosugi Maru",
                        labelString: "年間損益（絶対値）",
                    },
                    ticks: {
                        fontSize: 11,
                        max: 10000,
                        min: 1,
                        fontFamily: "Kosugi Maru",
                        callback: function (value, index, values) {
                            return value + "万円";
                        },
                    },
                },
            ],
        }, // 軸設定終わり

        annotation: {
            annotations: [
                {
                    type: "line", // 線分を指定
                    drawTime: "afterDatasetsDraw",
                    id: "a-line-1", // 線のid名を指定（他の線と区別するため）
                    mode: "horizontal", // 水平を指定
                    scaleID: "y-axis-0", // 基準とする軸のid名
                    value: kbkr_y_med, // 引きたい線の数値（始点）
                    endValue: kbkr_y_med, // 引きたい線の数値（終点）
                    borderColor: "rgba(0,153,255,0.5)", // 線の色
                    borderWidth: 2, // 線の幅（太さ）
                    borderDash: [2, 2],
                    borderDashOffset: 1,
                    label: {
                        // ラベルの設定
                        backgroundColor: "rgba(255,255,255,0.8)",
                        bordercolor: "rgba(0,153,255,0.5)",
                        borderwidth: 2,
                        fontSize: 11,
                        fontStyle: "bold",
                        fontColor: "rgba(0,153,255,0.5)",
                        xPadding: 10,
                        yPadding: 10,
                        cornerRadius: 3,
                        position: "right",
                        xAdjust: 0,
                        yAdjust: 0,
                        enabled: true,
                        content: "中央値 " + kbkr_y_med + " 万円",
                    },
                },
                {
                    type: "line", // 線分を指定
                    drawTime: "afterDatasetsDraw",
                    id: "a-line-2", // 線のid名を指定（他の線と区別するため）
                    mode: "horizontal", // 水平を指定
                    scaleID: "y-axis-0", // 基準とする軸のid名
                    value: kbkr_y_ave, // 引きたい線の数値（始点）
                    endValue: kbkr_y_ave, // 引きたい線の数値（終点）
                    borderColor: "rgba(53,161,212,0.6)", // 線の色
                    borderWidth: 2, // 線の幅（太さ）
                    borderDash: [2, 2],
                    borderDashOffset: 1,
                    label: {
                        // ラベルの設定
                        backgroundColor: "rgba(255,255,255,0.8)",
                        bordercolor: "rgba(53,161,212,0.6)",
                        borderwidth: 2,
                        fontSize: 11,
                        fontStyle: "bold",
                        fontColor: "rgba(53,161,212,0.6)",
                        xPadding: 10,
                        yPadding: 10,
                        cornerRadius: 3,
                        position: "right",
                        xAdjust: 0,
                        yAdjust: 0,
                        enabled: true,
                        content: "平均値 " + kbkr_y_ave + " 万円",
                    },
                },
            ],
        },
        plugins: {
            colorschemes: {
                scheme: "tableau.Blue20",
                fillAlpha: 0.2,
                override: true,
            },

        },
    }, // オプション設定終わり
});

$(function () {
    $(document).on("mouseenter", "#chartjs-tooltip", function (e) {
        $("#chartjs-tooltip").css("opacity", 1);
    });
});

