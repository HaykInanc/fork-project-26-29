const btn_container = document.querySelector('.btn_container');
const text_project = document.querySelector('.text_project');

{
	const data = [
		{
			id: 1,
			title: 'Цели',
			text: `Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты. Здоровой может быть даже выпечка, если она приготовлена на пару.

				Практически все из нас знают, что есть полезная и вредная еда, мы делим все продукты на плохие и хорошие, и это действительно так, потому что не все они полезны для человеческого организма, и есть много таких, которые вредны, а иногда и опасны. Ни для кого не будет открытием, что овощи и фрукты принесут организму колоссальную пользу, так как являются вкусной и полезной едой, насыщенной витаминами и массой других полезных веществ. Покушать утром особо полезно тем, что этот прием пищи заряжает энергией на целый день, и запускает процесс метаболизма в организме. Голодный человек думает не о работе, а о том, что хочет покушать.

				Ценность яблок кроется в их составе. Почти 80% яблок составляет вода. Остальная часть приходится на клетчатку, органические кислоты, углеводы. Именно зеленое яблоко рекомендуют употреблять во время диет. Среди фруктов яблоко является очень распространенным продуктом и практически целый год присутствует в нашем рационе питания. Употребление этих плодов натощак недопустимо при гастритах с повышенной кислотностью, язвенных болезнях, желчекаменной болезни.`,
		},
		{
			id: 2,
			title: 'Проекты',
			text: 'Первая конференция состоялась 21-28 ноября 1921 г. – именно эти даты считаются «днем рождения» СИГРЭ. В ней приняли участие 12 стран. Новая международная организация была и названа соответственно: Conférence Internationale des Grands Réseaux Électriques à Haute Tension (название сохранялось до 2000 г.). При открытии конференции были избраны руководители новой организации, в том числе ее первый генеральный секретарь – Жан Трибо Ласпьер. В этой должности он оставался вплоть до своей смерти в 1963 г.',
		},
		{
			id: 3,
			title: 'Контакты',
			text: `Адрес (юридический, почтовый, фактический):    
				Российская Федерация, 117630, г. Москва, улица Академика Челомея, дом 5А`,
		},
	];

	const trigger_array = data.map(({ title, text }) => {
		const button_elem = document.createElement('button');
		button_elem.addEventListener('click', (event) => {
			[...event.target.parentNode.children].forEach((btn) =>
				btn.classList.remove('active')
			);
			event.target.classList.add('active');
			text_project.innerText = text;
		});
		button_elem.innerText = title;
		return button_elem;
	});

	btn_container.append(...trigger_array);

	your_project.append(btn_container, text_project);

	trigger_array[0].click();
}

// article start
function Sim(sldrId) {
	let id = document.getElementById(sldrId);
	if (id) {
		this.sldrRoot = id;
	} else {
		this.sldrRoot = document.querySelector('.sim-slider');
	}

	// Carousel objects
	this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
	this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
	this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
	this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
	this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
	this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

	// Initialization
	this.options = Sim.defaults;
	Sim.initialize(this);
}

Sim.defaults = {
	// Default options for the carousel
	loop: true, // Бесконечное зацикливание слайдера
	auto: true, // Автоматическое пролистывание
	interval: 5000, // Интервал между пролистыванием элементов (мс)
	arrows: true, // Пролистывание стрелками
	dots: true, // Индикаторные точки
};

Sim.prototype.elemPrev = function (num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement -= num;
	if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

	if (!this.options.loop) {
		if (this.currentElement == 0) {
			this.leftArrow.style.display = 'none';
		}
		this.rightArrow.style.display = 'block';
	}

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

	if (this.options.dots) {
		this.dotOn(prevElement);
		this.dotOff(this.currentElement);
	}
};

Sim.prototype.elemNext = function (num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement += num;
	if (this.currentElement >= this.elemCount) this.currentElement = 0;

	if (!this.options.loop) {
		if (this.currentElement == this.elemCount - 1) {
			this.rightArrow.style.display = 'none';
		}
		this.leftArrow.style.display = 'block';
	}

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

	if (this.options.dots) {
		this.dotOn(prevElement);
		this.dotOff(this.currentElement);
	}
};

Sim.prototype.dotOn = function (num) {
	this.indicatorDotsAll[num].style.cssText =
		'background-color:#BBB; cursor:pointer;';
};

Sim.prototype.dotOff = function (num) {
	this.indicatorDotsAll[num].style.cssText =
		'background-color:#556; cursor:default;';
};

Sim.initialize = function (that) {
	// Constants
	that.elemCount = that.sldrElements.length; // Количество элементов

	// Variables
	that.currentElement = 0;
	let bgTime = getTime();

	// Functions
	function getTime() {
		return new Date().getTime();
	}
	function setAutoScroll() {
		that.autoScroll = setInterval(function () {
			let fnTime = getTime();
			if (fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime;
				that.elemNext();
			}
		}, that.options.interval);
	}

	// Start initialization
	if (that.elemCount <= 1) {
		// Отключить навигацию
		that.options.auto = false;
		that.options.arrows = false;
		that.options.dots = false;
		that.leftArrow.style.display = 'none';
		that.rightArrow.style.display = 'none';
	}
	if (that.elemCount >= 1) {
		// показать первый элемент
		that.sldrElemFirst.style.opacity = '1';
	}

	if (!that.options.loop) {
		that.leftArrow.style.display = 'none'; // отключить левую стрелку
		that.options.auto = false; // отключить автопркрутку
	} else if (that.options.auto) {
		// инициализация автопрокруки
		setAutoScroll();
		// Остановка прокрутки при наведении мыши на элемент
		that.sldrList.addEventListener(
			'mouseenter',
			function () {
				clearInterval(that.autoScroll);
			},
			false
		);
		that.sldrList.addEventListener('mouseleave', setAutoScroll, false);
	}

	if (that.options.arrows) {
		// инициализация стрелок
		that.leftArrow.addEventListener(
			'click',
			function () {
				let fnTime = getTime();
				if (fnTime - bgTime > 1000) {
					bgTime = fnTime;
					that.elemPrev();
				}
			},
			false
		);
		that.rightArrow.addEventListener(
			'click',
			function () {
				let fnTime = getTime();
				if (fnTime - bgTime > 1000) {
					bgTime = fnTime;
					that.elemNext();
				}
			},
			false
		);
	} else {
		that.leftArrow.style.display = 'none';
		that.rightArrow.style.display = 'none';
	}

	if (that.options.dots) {
		// инициализация индикаторных точек
		let sum = '',
			diffNum;
		for (let i = 0; i < that.elemCount; i++) {
			sum += '<span class="sim-dot"></span>';
		}
		that.indicatorDots.innerHTML = sum;
		that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.sim-dot');
		// Назначаем точкам обработчик события 'click'
		for (let n = 0; n < that.elemCount; n++) {
			that.indicatorDotsAll[n].addEventListener(
				'click',
				function () {
					diffNum = Math.abs(n - that.currentElement);
					if (n < that.currentElement) {
						bgTime = getTime();
						that.elemPrev(diffNum);
					} else if (n > that.currentElement) {
						bgTime = getTime();
						that.elemNext(diffNum);
					}
					// Если n == that.currentElement ничего не делаем
				},
				false
			);
		}
		that.dotOff(0); // точка[0] выключена, остальные включены
		for (let i = 1; i < that.elemCount; i++) {
			that.dotOn(i);
		}
	}
};

new Sim();
// article end
