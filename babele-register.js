
var types = {
	"aberration (shapechanger)":"Аберрация (перевертыш)",
	"aberration":"Аберрация",
	"beast":"Зверь",
	"celestial (titan)":"Небожитель (титан)",
	"celestial":"Небожитель",
	"construct":"Конструкт",
	"dragon":"Дракон",
	"elemental":"Элементаль",
	"fey":"Фея",
	"fiend (demon)":"Исчадие (демон)",
	"fiend (demon, orc)":"Исчадие (демон, орк)",
	"fiend (demon, shapechanger)":"Исчадие (демон, перевертыш)",
	"fiend (devil)":"Исчадие (дьявол)",
	"fiend (devil, shapechanger)":"Исчадие (дьявол, перевертыш)",
	"fiend (gnoll)":"Исчадие (гнолл)",
	"fiend (shapechanger)":"Исчадие (перевертыш)",
	"fiend (yugoloth)":"Исчадие (юголот)",
	"fiend":"Исчадие",
	"giant (cloud giant)":"Великан (облачный великан)",
	"giant (fire giant)":"Великан (огненный великан)",
	"giant (frost giant)":"Великан (ледяной великан)",
	"giant (hill giant)":"Великан (холмовой великан)",
	"giant (stone giant)":"Великан (каменный великан)",
	"giant (storm giant)":"Великан (штормовой великан)",
	"giant":"Великан",
	"humanoid (aarakocra)":"Гуманоид (ааракокра)",
	"humanoid (any race)":"Гуманоид (любая раса)",
	"humanoid (bullywug)":"Гуманоид (жаболюд)",
	"humanoid (dwarf)":"Гуманоид (дварф)",
	"humanoid (elf)":"Гуманоид (эльф)",
	"humanoid (gith)":"Гуманоид (гит)",
	"humanoid (gnoll)":"Гуманоид (гнолл)",
	"humanoid (gnome)":"Гуманоид (гном)",
	"humanoid (goblinoid)":"Гуманоид (гоблиноид)",
	"humanoid (grimlock)":"Гуманоид (гримлок)",
	"humanoid (human)":"Гуманоид (человек)",
	"humanoid (human, shapechanger)":"Гуманоид (человек, перевертыш)",
	"humanoid (kenku)":"Гуманоид (кенку)",
	"humanoid (kobold)":"Гуманоид (кобольд)",
	"humanoid (kuo-toa)":"Гуманоид (куо-тоа)",
	"humanoid (lizardfolk)":"Гуманоид (людоящер)",
	"humanoid (merfolk)":"Гуманоид (мерфолк)",
	"humanoid (orc)":"Гуманоид (орк)",
	"humanoid (quaggoth)":"Гуманоид (кваггот)",
	"humanoid (sahuagin)":"Гуманоид (сахуагин)",
	"humanoid (shapechanger)":"Гуманоид (перевертыш)",
	"humanoid (troglodyte)":"Гуманоид (троглодит)",
	"humanoid (yuan-ti)":"Гуманоид (юан-ти)",
	"humanoid":"Гуманоид",
	"monstrosity (shapechanger)":"Монстр (перевертыш)",
	"monstrosity (shapechanger, yuan-ti)":"Монстр (перевертыш, юан-ти)",
	"monstrosity (titan)":"Монстр (титан)",
	"monstrosity":"Монстр",
	"ooze":"Слизь",
	"plant":"Растение",
	"swarm of Tiny beasts":"Рой крохотных существ",
	"undead (shapechanger)":"Нежить (перевертыш)",
	"undead":"Нежить"
};

var alignments = {
	"chaotic evil": "Хаотично-Злой",
	"chaotic neutral":"Хаотично-Нейтральный",
	"chaotic good":"Хаотично-Добрый",
	"neutral evil":"Нейтрально-Злой",
	"true neutral":"Нейтральный",
	"neutral":"Нейтральный",
	"neutral good":"Нейтрально-Добрый",
	"lawful evil":"Законно-Злой",
	"lawful neutral":"Законно-Нейтральный",
	"lawful good":"Законно-Добрый",
	"chaotic good evil":"Хаотично-Добрый/Злой",
	"lawful chaotic evil":"Законно/Хаотично-Злой",
	"unaligned":"Без мировоззрения",
	"any non-lawful": "Любое мировоззрение кроме законного",
	"any": "Любое мировоззрение",
};

var languages = {
	"giant eagle": "язык Гигантских орлов",
	"worg":"язык Воргов",
	"winter wolf":"язык Полярных волков",
	"sahuagin":"сахуагинский",
	"giant owl, understands but cannot speak all but giant owl":"язык Гигантских сов, понимает остальные, но не говорит на них",
	"giant elk but can't speak them":"язык Гигантских лосей, но не говорит на них",
	"understands infernal but can't speak it":"понимает Инфернальный, но не говорит на нем",
	"understands draconic but can't speak":"понимает Драконий, но не говорит",
	"understands common but doesn't speak it":"понимает Общий, но не говорит на нем",
	"understands abyssal but can't speak":"понимает язык Бездны, но не говорит",
	"understands all languages it knew in life but can't speak":"понимает языки, известные при жизни, но не говорит",
	"understands commands given in any language but can't speak":"понимает команды, отданные на любом языке, но не говорит",
	"(can't speak in rat form)":"(не может говорить в облике крысы)",
	"(can't speak in boar form)":"(не может говорить в облике кабана)",
	"(can't speak in bear form)":"(не может говорить в облике медведя)",
	"(can't speak in tiger form)":"(не может говорить в облике тигра)",
	"any one language (usually common)":"один любой язык, обычно Общий",
	"any two languages":"2 любых языка",
	"any four languages":"4 любых языка",
	"5 other languages":"до пяти других языков",
	"any, usually common":"любой язык, обычно Общий",
	"one language known by its creator":"один язык, известный создателю",
	"the languages it knew in life":"все, известные при жизни",
	"those it knew in life":"все, известные при жизни",
	"all it knew in life":"все, известные при жизни",
	"any it knew in life":"все, известные при жизни",
	"all, telepathy 120 ft.":"все, телепатия 120 фт.",
	"telepathy 60 ft.":"телепатия 60 фт.",
	"telepathy 60ft. (works only with creatures that understand abyssal)":"телепатия 60 фт. (работает только с существами, понимающими язык Бездны)",
	"telepathy 120 ft.":"телепатия 120 фт.",
	"but can't speak":"но не говорит",
	"but can't speak it":"но не говорит на нем",
	"choice":"на выбор",
	"understands the languages of its creator but can't speak":"понимает языки своего создателя, но не говорит",
	"understands common and giant but can't speak":"понимает Великаний и Общий, но не говорит",
	"cannot speak": "не говорит"
};

var races = {
	"Dragonborn": "Драконорожденный",
	"Dwarf": "Дварф",
	"Hill Dwarf": "Холмовой дварф",
	"Elf": "Эльф",
	"High Elf": "Высщий эльф",
	"Gnome": "Гном",
	"Rock Gnome": "Скальный гном",
	"Half Elf": "Полуэльф",
	"Half-elf": "Полуэльф",
	"Halfling": "Полурослик",
	"Lightfoot Halfling": "Легконогий полурослик",
	"Half Orc": "Полуорк",
	"HUMAN": "Человек",
	"Human": "Человек",
	"Variant Human": "Челвек (альтернативный)",
	"Tiefling": "Тифлинг"
};

var rarity = {
	"Common": "Обычный",
	"Uncommon": "Необычный",
	"Rare": "Редкий",
	"Very rare": "Очень редкий",
	"Legendary": "Легендарный"
};

function parseSenses(sensesText) {
	const senses = sensesText.split('. ');
	let parsed = '';
	senses.forEach(sense => { parsed = parseSense(sense) + ' ' + parsed; });
	return parsed;
}

function parseSense(sense) {
	sense = sense.replace(/ft/gi, 'фт.');
	sense = sense.replace(/feet/gi, 'фт.');
	sense = sense.replace(/Darkvision/gi, "Темное зрение");
	sense = sense.replace(/Darvision/gi, "Темное зрение"); //bug ^^
	sense = sense.replace(/Blindsight/gi, "Слепое зрение");
	sense = sense.replace(/Truesight/gi, "Истинное зрение");
	sense = sense.replace(/tremorsense/gi, "Чувство вибрации");
	sense = sense.replace(/Blind Beyond/gi, "Слеп за пределами");
	sense = sense.replace(/this radius/gi, "этого радиуса");
	sense = sense.replace("(blind beyond this radius)", "(слеп за пределами этого радиуса)");
	return sense;
}

function parseDamage(damage) {
	damage = damage.replace(/bludgeoning/gi, 'дробящий');
	damage = damage.replace(/piercing/gi, 'колющий');
	damage = damage.replace(/and/gi, 'и');
	damage = damage.replace(/slashing/gi, 'рубящий');
	damage = damage.replace(/from/gi, 'от');
	damage = damage.replace(/nonmagical attacks/gi, 'немагических атак');
	damage = damage.replace(/that aren't silvered/gi, 'непосеребренным оружием');
	damage = damage.replace(/not made with silvered weapons/gi, 'оружия, не покрытого серебром');
	return damage;
}

Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'dnd5e-lang-ru',
			lang: 'ru',
			dir: 'compendium'
		});

		Babele.get().registerConverters({
			"type": (type) => {
				return types[type.toLowerCase()];
			},
			"alignement": (alignment) => {
				return alignments[alignment.toLowerCase()];
			},
			"senses": (senses) => {
				return senses ? parseSenses(senses) : null;
			},
			"di": (damage) => {
				return parseDamage(damage);
			},
			"languages": (lang) => {
				if (lang != null ) {
					const languagesSplit = lang.split('; ');
					var languagesFin = '';
					var languagesTr = '';
					languagesSplit.forEach(function(el){
						languagesTr = languages[el.toLowerCase()] ;
						if (languagesTr != null) {
							if (languagesFin === '') {
								languagesFin = languagesTr;
							}  else {
								languagesFin = languagesFin + ' ; '  + languagesTr;
							}
						}
					});
					return languagesFin;
				}
			},
			"race": (race) => {
				return races[race] ? races[race] : race;
			},
			"rarity": (r) => {
				return rarity[r] ? rarity[r] : r
			}
		});
	}
});

async function skillSorting() {
	const lists = document.getElementsByClassName("skills-list");
	for (let list of lists) {
		const competences = list.childNodes;
		let complist = [];
		for (let sk of competences) {
			if (sk.innerText && sk.tagName == "LI") {
				complist.push(sk);
			}
		}
		complist.sort(function(a, b) {
			return (a.innerText > b.innerText) ? 1 : -1;
		});
		for (let sk of complist) {
			list.appendChild(sk)
		}
	}
}

Hooks.on("renderActorSheet", async function() {
	skillSorting();
});
