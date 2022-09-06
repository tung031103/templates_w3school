
var students = [
    {
        id: 1,
        name: 'Tung',
        coin: 120
    },

    {
        id: 2,
        name: 'Duong',
        coin: 300
    },

    {
        id: 3,
        name: 'Luong',
        coin: 200
    },

    {
        id: 4,
        name: 'Nhan',
        coin: 100
    },

    {
        id: 5,
        name: 'Tung',
        coin: 400
    },

    {
        id: 6,
        name: 'Tung',
        coin: 500
    },
];

var i=0;

function coinHandler(accumulator, currentValue, currentIndex, originArr){
    i++;

    var total = accumulator + currentValue.coin;
    console.table({
        'Lượt chay: ': i,
        'Biến lưu trữ: ': accumulator,
        'Gia khoa hoc: ': currentValue.coin,
        'tich tru duoc: ': total
    });
    
    
    return total;
}



var totalCoin = students.reduce(coinHandler, 0);

console.log(totalCoin)
