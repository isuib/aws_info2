const attitem = ['icon', 'abbr', 'orig', 'cate', 'page', 'expl', 'url'];
let naiyo2 = [];
document.addEventListener('DOMContentLoaded', function(){hyoji(naiyo)});

const attobj = {};
for (i=0; i<naiyoitem.length; i++) {
	attobj[naiyoitem[i]] = attitem[i];
}

/*  == 選択で表示させる項目の設定 ==  */
const sentakucate = naiyoitem[3]
const sentaku0 = naiyo.map(obj => obj[sentakucate]);
let sentaku = new Set(sentaku0);
sentaku = Array.from(sentaku);
sentaku.sort((a,b) => a.localeCompare(b));

/* == 表を作る関数 == */
function hyoji(nakami) {
	const hyo = document.querySelector('#table1 tbody');
	
	if (!document.querySelector('th')) {
		const trelm = document.createElement('tr');
		trelm.setAttribute('class', 'title');
		hyo.appendChild(trelm);
		
		for (let na of naiyoitem) {
			const tdelm = document.createElement('th');
			/* == 図・リンクをつけるなどしたい場合はここを変える [タイトル] == */
			switch (na) {
				case 'icon_name':
					tdelm.innerHTML = 'Icon';
					break;
				case 'AWS_URL':
					tdelm.innerHTML = 'Link';
					break;
				default:
					tdelm.innerHTML = na;
			}
			trelm.appendChild(tdelm);
		}
	}
	
	for (let nak of nakami) {
		const trelm = document.createElement('tr');
		trelm.setAttribute('class', 'general');
		hyo.appendChild(trelm);
		
		for (let nai of naiyoitem) {
			const tdelm = document.createElement('td');
			/* == 図・リンクをつけるなどしたい場合はここを変える [中身] == */
			switch (nai) {
				case 'icon_name':
					const imgelm = document.createElement('img');
					imgelm.setAttribute('src', 'img/' + nak[nai]);
					tdelm.appendChild(imgelm);
					break;
				case 'AWS_URL':
					if (nak[nai]) {
						const aelm = document.createElement('a');
						aelm.setAttribute('href', nak[nai]);
						aelm.setAttribute('target', '_blank');
						aelm.innerHTML = '詳細リンク';
						tdelm.appendChild(aelm);
					}
					break;
				default:
					tdelm.innerHTML = nak[nai];
			}
			tdelm.setAttribute('class', attobj[nai]);
			trelm.appendChild(tdelm);
		}
	}
	
	/* === 選択で表示させる項目の作成とイベントリスナー === */
	const sentakuul = document.querySelector('#oya1 ul');
	if (!sentakuul.querySelectorAll('li')[1]) {
		for (let se of sentaku) {
			const lielm = document.createElement('li');
			lielm.innerHTML = se;
			sentakuul.appendChild(lielm);
		}
	
		document.querySelectorAll('#oya1 li').forEach((element) => {
			element.addEventListener('click', (e) => {
				const txt = e.target.innerText;
				selection(txt, sentakucate);
			});
		});
	}
}

/* == ソートする時の関数 == */
function sortf(itemNo, updown) {
	if (!naiyo2.length) {
		naiyo2 = Object.create(naiyo);
	}
	if (itemNo < 0 ) {
		naiyo2.sort((a,b) => {
			return (a.no - b.no)*updown;
		});
	} else {
		naiyo2.sort((a,b) => {
			return a[naiyoitem[itemNo]].localeCompare(b[naiyoitem[itemNo]])*updown;
		});
	}
	tableclr();
	hyoji(naiyo2);
}

/* == 抜き出す時の関数 == */
function selection(atai, categ) {
	if (atai == 'ALL') {
		naiyo2 = Object.create(naiyo);
		sortf(3, 1);
	} else {
		naiyo2 = naiyo.filter( obj => obj[categ] == atai);
		tableclr();
		hyoji(naiyo2);
	}
}

/* == テーブルクリア==  */
function tableclr() {
	tablenaiyo = document.querySelectorAll('.general');
	tableN = tablenaiyo.length;
	for (i=0; i<tableN; i++) {
		document.querySelector('.general').remove();
	}
}

function test(itemNo, detailNo, liNo) {
	det = document.querySelectorAll('.detail')[detailNo];
	litxt = det.querySelectorAll('li')[liNo].innerHTML;
	
	console.log(litxt);
}
function test2() {
	console.log('OK');
}

