var kabu_datasets = [
    { label: 'itoh3d', data: [{ x: 26, y: 550, r: 14.6 }] },
    { label: 'musou1231', data: [{ x: 3.9, y: 239, r: 22.5 }] },
    { label: 'MUCHO84928709', data: [{ x: 123.5, y: 597, r: 9.3 }] },
    { label: 'M31hI', data: [{ x: 9.6, y: 603, r: 23.5 }] },
    { label: 'noDance_hall', data: [{ x: 6.4, y: 240, r: 17.9 }] },
    { label: 'btlr6P1YjrlTMjX', data: [{ x: 14.7, y: 176, r: 10.5 }] },
    { label: 'goron__chan', data: [{ x: 39.5, y: 794, r: 14.9 }] },
    { label: 'sistinavc', data: [{ x: 78.5, y: 2844, r: 22.7 }] },
    { label: 'kabusaga', data: [{ x: -11.5, y: 5, r: 1.7 }] },
    { label: 'HappyHikingDay', data: [{ x: 21, y: 43, r: 4.5 }] },
    { label: 'strade18644883', data: [{ x: 18, y: 53, r: 5.3 }] },
    { label: 'k_investment7', data: [{ x: 6.7, y: 86, r: 10.4 }] },
    { label: 'NLSK_spoonhobby', data: [{ x: -0.3, y: 0, r: 2 }] },
    { label: 'c_macmillan12', data: [{ x: -25, y: 100, r: 4.9 }] },
    { label: 'chun3', data: [{ x: 2.5, y: 38, r: 11.1 }] },
    { label: 'ns4Z88PtaQnJRjS', data: [{ x: 34.4, y: 2270, r: 26.6 }] },
    { label: 'bellppy_25', data: [{ x: -10.8, y: 1135, r: 27.3 }] },
    { label: 'kabu1000', data: [{ x: -3.8, y: 987, r: 44.5 }] },


];
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
var kbkr_y_med = median(kabu_datasets.map(getY));

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
                        innerHtml += "<tr><td>" + "年初来パフォ：" + body_content[1][0] + " %</td></tr>";
                        if (body_content[1][0] >= 0) {
                            innerHtml += "<tr><td>" + "年間損益：+" + body_content[1][1] + " 万円</td></tr>";
                        } else {
                            innerHtml += "<tr><td>" + "年間損益：-" + body_content[1][1] + " 万円</td></tr>";
                        }
                        var shisan = Math.round(((2 * body_content[1][2]) ** 2 * 3.13) / 100) * 100;
                        if (shisan == 0) {
                            innerHtml += "<tr><td>" + "総資産：～ 100 万円</td></tr>";
                        } else {
                            innerHtml += "<tr><td>" + "総資産：" + shisan + " 万円+</td></tr>";
                        }
                    });
                    innerHtml += "</tbody>";

                    var tableRoot = tooltipEl.querySelector("table");
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` はツールチップ全体です
                var position = this._chart.canvas.getBoundingClientRect();
                console.log(position);

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

