
var kabu_datasets =
    [
        { label: 'itoh3d', data: [{ x: 23.77, y: 503, r: 14.4 }] },
        { label: 'musou1231', data: [{ x: 5.2, y: 318, r: 22.6 }] },
        { label: 'MUCHO84928709', data: [{ x: 31.98, y: 150, r: 7 }] },
        { label: 'masakabu1213', data: [{ x: 8.9, y: 33, r: 5.6 }] },
        { label: 'M31hI', data: [{ x: 6.3, y: 398, r: 23.1 }] },
        { label: 'noDance_hall', data: [{ x: 2.76, y: 104, r: 17.6 }] },
        { label: 'btlr6P1YjrlTMjX', data: [{ x: 3.35, y: 40, r: 9.9 }] },
        { label: 'goron__chan', data: [{ x: 48.07, y: 943, r: 15.2 }] },

    ];



// チャート描画
var ctx = document.getElementById("myBubbleChart");
var myChart = new Chart(ctx, {
    type: 'bubble',

    data: {
        datasets: kabu_datasets

    },

    options: {
        legend: {
            display: false
        },

        maintainAspectRatio: false,

        tooltips: {
            bodyFontSize: 16,
        },

        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    fontSize: 14,
                    fontFamily: "Kosugi Maru",
                    labelString: "年間利回り"
                },
                ticks: {
                    fontSize: 12,
                    fontFamily: "Kosugi Maru",
                    suggestedMin: 0,
                    callback: function (value, index, values) {
                        return value + '%'
                    }
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    fontSize: 12,
                    fontFamily: "Kosugi Maru",
                    labelString: "年間損益"
                },
                ticks: {
                    fontSize: 12,
                    fontFamily: "Kosugi Maru",
                    suggestedMin: 0,
                    callback: function (value, index, values) {
                        return value + '万円'
                    }
                }
            }]
        }// 軸設定終わり

    }// オプション設定終わり

});


// クリックイベントハンドラー
ctx.addEventListener('click', function (evt) {
    var item = myChart.getElementAtEvent(evt);
    if (item.length == 0) {
        return;
    }
    item = item[0];
    var index = item._datasetIndex;
    var item_data = item._chart.config.data.datasets;
    var item_label = item_data[index].label;
    console.log(index);
    console.log(item_data);
    console.log(item_label);
    window.open('https://twitter.com/' + item_label)
});

