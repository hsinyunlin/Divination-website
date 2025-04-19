let diceCount = 0;

function startDivination() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('divination-page').style.display = 'block';
}

function throwDice() {
    const dice1 = Math.floor(Math.random() * 2);
    const dice2 = Math.floor(Math.random() * 2);
    const resultDiv = document.getElementById('dice-result');
    
    resultDiv.innerHTML = `筊結果：${dice1 === 0 ? '正' : '反'} | ${dice2 === 0 ? '正' : '反'}`;
    
    if ((dice1 === 0 && dice2 === 1) || (dice1 === 1 && dice2 === 0)) {
        diceCount++;
        document.getElementById('dice-count').innerText = `已擲：${diceCount} 次聖筊`;
        
        if (diceCount === 3) {
            showResult();
        }
    } else {
        resultDiv.innerHTML += '<br>非聖筊，請重新求籤';
        setTimeout(() => {
            restart();
        }, 2000);
    }
}

function showResult() {
    document.getElementById('divination-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';

    const poems = [
        {
            poem: "日出便見風雲散，光明清淨照世間，一向前途通大道，萬事清吉保平安。",
            meaning: "這是一首上上籤，象徵光明和順利。你的前途一片光明，無論做什麼都會順利，萬事平安。",
            illustration: "illustration1.jpg"
        },
        {
            poem: "於今此景正當時，看看欲吐百花魁，若能遇得春色到，一洒清吉脫塵埃。",
            meaning: "時機正好，建議你把握當下，積極行動，就能脫離困境，迎來好運。",
            illustration: "illustration2.jpg"
        },
        {
            poem: "勸君把定心莫虛，天註衣祿自有餘，和合重重常吉慶，時來終遇得明珠。",
            meaning: "保持內心穩定，你的福分天註定，耐心等待，就能遇到貴人，獲得成功。",
            illustration: "illustration3.jpg"
        },
        {
            poem: "花開今已結成果，富貴榮華終到老，君子小人相會合，萬事清吉莫煩惱。",
            meaning: "你的努力有成果，未來會有富貴和榮華。注意分辨身邊的人，保持平和，一切順利。",
            illustration: "illustration4.jpg"
        },
        {
            poem: "只恐前途命有變，勸君作急可宜先，且守長江無大事，命逢太白守身邊。",
            meaning: "前途可能有變數，建議提早準備，守住根基，有貴人會保護你。",
            illustration: "illustration5.jpg"
        }
    ];

    const randomIndex = Math.floor(Math.random() * poems.length);
    const selectedPoem = poems[randomIndex];

    document.getElementById('poem-result').innerHTML = `
        <h2>籤詩</h2>
        <p>${selectedPoem.poem}</p>
        <h3>解釋</h3>
        <p>${selectedPoem.meaning}</p>
    `;

    document.getElementById('illustration').innerHTML = `
        <img src="${selectedPoem.illustration}" alt="插畫">
    `;
}

function restart() {
    diceCount = 0;
    document.getElementById('dice-count').innerText = `已擲：0 次聖筊`;
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('divination-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}
