class AppView {
    static animation(styles, domId, duration, start, end, frequency, logging) {
        // Vita
        const ID = 'g*10';
        const TITLE = 'Animation CSS styles';
        const SPECIFICATION = `
        Данный код предназначен для выполнения анимации CSS стилей. Вот пример кода:

        HTML
        <div class="header" id="coming">Hello, World!</div>

        CSS
        .header {
            overflow: hidden;
            opacity: 0;
        }

        JS
        const STYLES = 'height: calc(*rem)';
        const DOM_ID = 'coming';
        const DURATION = '1200';
        const START = '0';
        const END = '100';
        const FREQUENCY = '60';

        Поддерживается только одна пара ключ-значение.

        Дополнительные функции
        const LOGGING = true;
        Эта настройка включит логирование, информация будет выводиться в консоль.
        `;
        const VERSION = '0.0.3';
        // Settings
        const STYLES = styles;
        const DOM_ID = domId;
        const DURATION = duration;
        const START = start;
        const END = end;
        const FREQUENCY = frequency;
        const LOGGING = logging;
        // Implementation
        const PROPERTY = STYLES.slice(0, STYLES.match(':').index);
        const TEMPLATE = STYLES.slice(STYLES.match(':').index + 2);
        if (LOGGING) {
            console.log('Property: ' + PROPERTY);
            console.log('Template: ' + TEMPLATE);
        }
        const DELAY = 1000 / Number(FREQUENCY);
        let DIRECTION = false;
        if (Number(START) === Number(END)) {
            DIRECTION = 'absent';
        } else if (Number(START) < Number(END)) {
            DIRECTION = 'upward';
        } else if (Number(START) > Number(END)) {
            DIRECTION = 'downward';
        }
        const STEPS = Number(DURATION) / DELAY;
        const RANGE = Math.abs(Number(END) - Number(START));
        const STEP = RANGE / STEPS;
        let value = Number(START);
        const ELEMENT = window.document.getElementById(DOM_ID);
        if (ELEMENT === null) {
            console.error('DOM is not contains element by name: ' + DOM_ID);
        }
        ELEMENT.style[PROPERTY] = TEMPLATE.replace('*', value);
        if (LOGGING) {
            console.log('Setted style: ' + PROPERTY + ': ' + ELEMENT.style[PROPERTY]);
        }
        return new Promise(resolve => {
            const ANIMATION_INTERVAL = setInterval(() => {
                if (DIRECTION === 'upward') {
                    value += STEP;
                    if (value >= Number(END)) {
                        ELEMENT.style[PROPERTY] = TEMPLATE.replace('*', END);
                        clearInterval(ANIMATION_INTERVAL);
                        resolve();
                    } else {
                        ELEMENT.style[PROPERTY] = TEMPLATE.replace('*', value);
                    }
                }
                if (DIRECTION === 'downward') {
                    value -= STEP;
                    if (value <= Number(END)) {
                        ELEMENT.style[PROPERTY] = TEMPLATE.replace('*', END);
                        clearInterval(ANIMATION_INTERVAL);
                        resolve();
                    } else {
                        ELEMENT.style[PROPERTY] = TEMPLATE.replace('*', value);
                    }
                }
            }, DELAY);
        });
    }
    static modify(id, css) {
        `
        .home {
            height: 55px;
        }
        #protection-glass {
            opacity: 0;
        }
        `;
        // Разделить CSS код на таблицы
        const SHEETS = [];
        let sheet = '';
        for (let piece of css) {
            sheet += piece;
            if (piece === '}') {
                SHEETS.push(sheet);
                sheet = '';
            }
        }
        // Обрезка в таблицах лишнего по краям
        for (let sheetIndex in SHEETS) {
            let sheet = SHEETS[sheetIndex];
            if (sheet.startsWith('\n')) {
                sheet = sheet.slice(1);
                SHEETS[sheetIndex] = sheet;
            }
        }
        // Разделение на пары ключ-значение
        for (let sheet of SHEETS) {
            let header = '';
            for (let piece of sheet) {
                if (piece === '{') {
                    break;
                }
                header += piece;
            }
            // Обрезка строк
        }
        if (slice(0, 1) === '.') {

            const ELEMENT = window.document;
        }
        if (slice(0, 1) === '#') {

        }
        const PROPERTY = style.slice(0, style.match(':').index);
        const VALUE = style.slice(style.match(':').index + 2);
        const ELEMENT = window.document.getElementById(id);
        ELEMENT.style[PROPERTY] = VALUE;
    }
}
class AppViewTesting {
    static modify() {
        
    }
}
class LoadingModel {
    static getScreensText() {
        const BODY = new FormData();
        BODY.append('fileAddress', 'screens.html');
        return new Promise(resolve => {
            fetch('controllers/file-read.php', {
                body: BODY,
                method: 'POST',
            }).then(response => response.text()).then(text => resolve(text));
        });
    }
}
class LoadingView {
    static valuesRange = {
        'top': { 'start': 0, 'end': -20, 'step': 0.2 },
        'left': { 'start': 0, 'end': -20, 'step': 0.2 },
        'width': { 'start': 100, 'end': 140, 'step': 0.4 },
        'height': { 'start': 100, 'end': 140, 'step': 0.4 },
        'border-radius': { 'start': 33, 'end': 51, 'step': 0.18 },
        'STRAIN': { 'start': 0, 'end': 100, 'step': 1 },
    };
    static justNowSituation = {
        'top': 0,
        'left': 0,
        'width': 100,
        'height': 100,
        'border-radius': 33,
        'STRAIN': 0,
        'moveDirection': 'forth',
    };
    static animationInterval = false;
    static iterationsCount = 0;
    static stoppingInterval = false;
    static play() {
        const LOADING_BORDER = window.document.getElementById('loading-border');
        this.animationInterval = setInterval(
            () => {
                if (this.justNowSituation['moveDirection'] === 'forth') {
                    this.justNowSituation['top'] -= this.valuesRange['top']['step'];
                    this.justNowSituation['left'] -= this.valuesRange['left']['step'];
                    this.justNowSituation['width'] += this.valuesRange['width']['step'];
                    this.justNowSituation['height'] += this.valuesRange['height']['step'];
                    this.justNowSituation['border-radius'] += this.valuesRange['border-radius']['step'];
                    this.justNowSituation['STRAIN'] += this.valuesRange['STRAIN']['step'];
                    if (this.justNowSituation['STRAIN'] === this.valuesRange['STRAIN']['end']) {
                        this.justNowSituation['moveDirection'] = 'back';
                    }
                } else if (this.justNowSituation['moveDirection'] === 'back') {
                    this.justNowSituation['top'] += this.valuesRange['top']['step'];
                    this.justNowSituation['left'] += this.valuesRange['left']['step'];
                    this.justNowSituation['width'] -= this.valuesRange['width']['step'];
                    this.justNowSituation['height'] -= this.valuesRange['height']['step'];
                    this.justNowSituation['border-radius'] -= this.valuesRange['border-radius']['step'];
                    this.justNowSituation['STRAIN'] -= this.valuesRange['STRAIN']['step'];
                    if (this.justNowSituation['STRAIN'] === this.valuesRange['STRAIN']['start']) {
                        this.justNowSituation['moveDirection'] = 'forth';
                        this.iterationsCount += 1;
                    }
                }
                LOADING_BORDER.style.top = this.justNowSituation['top'] + 'px';
                LOADING_BORDER.style.left = this.justNowSituation['left'] + 'px';
                LOADING_BORDER.style.width = this.justNowSituation['width'] + 'px';
                LOADING_BORDER.style.height = this.justNowSituation['height'] + 'px';
                LOADING_BORDER.style.borderRadius = this.justNowSituation['border-radius'] + 'px';
            },
            10,
        );
    }
    static stop() {
        return new Promise((resolve) => {
            this.stoppingInterval = setInterval(
                () => {
                    if (this.iterationsCount > 0) {
                        clearInterval(this.animationInterval);
                        clearInterval(this.stoppingInterval);
                        resolve();
                    }
                },
                10,
            );
        });
    }
    static show() {
        const LOADING_SCREEN = window.document.getElementById('loading-screen');
        let opacityValue = 0;
        const OPACITY_INTERVAL = setInterval(
            () => {
                LOADING_SCREEN.style.opacity = opacityValue + '%';
                opacityValue += 1;
                if (opacityValue === 100) {
                    LOADING_SCREEN.style.opacity = '100%';
                    clearInterval(OPACITY_INTERVAL);
                }
            },
            15,
        );
    }
    static open() {
        const LOADING_SCREEN = window.document.getElementById('loading-screen');
        LOADING_SCREEN.style.height = '100%';
    }
    static close() {
        const LOADING_SCREEN = window.document.getElementById('loading-screen');
        LOADING_SCREEN.style.height = '0';
        this.stop();
        LOADING_SCREEN.style.opacity = '0';
    }
}
class LoadingController {
    static async init() {
        const SCREENS_DADDY = window.document.getElementById('screens-daddy');
        SCREENS_DADDY.innerHTML = await LoadingModel.getScreensText();
    }
}
class HomeView {
    static shadowStatus = 'light';
    static shadowInterval = false;
    static init() {
        HomeView.open();
        HomeView.show();
    }
    static show() {
        const HOME = window.document.getElementById('home');
        let opacityValue = 0;
        const OPACITY_INTERVAL = setInterval(
            () => {
                HOME.style.opacity = opacityValue + '%';
                opacityValue += 10;
                if (opacityValue === 100) {
                    HOME.style.opacity = '100%';
                    clearInterval(OPACITY_INTERVAL);
                }
            },
            15,
        );
    }
    static open() {
        const HOME = window.document.getElementById('home');
        HOME.style.zIndex = '0';
    }
    static close() {
        const HOME = window.document.getElementById('home');
        HOME.style.zIndex = '-1';
    }
    static shadeField() {
        if (this.shadowStatus === 'dark') {
            return;
        } else {
            this.shadowStatus = 'dark';
        }
        if (this.shadowInterval !== false) {
            clearInterval(this.shadowInterval);
            this.shadowInterval = false;
        }
        const FIELD = window.document.getElementById('field');
        let offsetY = 0;
        const ANIMATION_INTERVAL = setInterval(() => {
            offsetY += 0.5;
            if (offsetY > 10) {
                clearInterval(ANIMATION_INTERVAL);
                this.shadowInterval = false;
            } else {
                FIELD.style.boxShadow = `inset 0 ${offsetY}px 10px -10px rgba(0, 0, 0, 0.12)`;
            }
        }, 15);
        this.shadowInterval = ANIMATION_INTERVAL;
    }
    static removeFieldShadow() {
        if (this.shadowStatus === 'light') {
            return;
        } else {
            this.shadowStatus = 'light';
        }
        if (this.shadowInterval !== false) {
            clearInterval(this.shadowInterval);
            this.shadowInterval = false;
        }
        const FIELD = window.document.getElementById('field');
        let offsetY = 10;
        const ANIMATION_INTERVAL = setInterval(() => {
            offsetY -= 0.5;
            if (offsetY < 0) {
                clearInterval(ANIMATION_INTERVAL);
                this.shadowInterval = false;
            } else {
                FIELD.style.boxShadow = `inset 0 ${offsetY}px 10px -10px rgba(0, 0, 0, 0.12)`;
            }
        }, 15);
        this.shadowInterval = ANIMATION_INTERVAL;
    }
    static async showLoading() {
        await AppView.animation('opacity: *%', 'memorization', 500, 0, 100, 60, false);
    }
    static async hideLoading() {
        await AppView.animation('opacity: *%', 'memorization', 500, 100, 0, 60, false);
    }
    static async expandPanel() {
        AppView.animation('height: calc(100% - 57px - *px)', 'field', 500, 0, 49, 60, false);
        await AppView.animation('height: *px', 'control-wrap', 500, 0, 49, 60, false);
    }
    static async collapsePanel() {
        AppView.animation('height: calc(100% - 57px - *px)', 'field', 500, 49, 0, 60, false);
        await AppView.animation('height: *px', 'control-wrap', 500, 49, 0, 60, false);
    }
    static async evaporateLogo() {
        AppView.animation('transform: scale(*%)', 'logo', 500, 100, 0, 60, false);
        AppView.animation('width: *px', 'logo', 500, 48, 0, 60, false);
    }
    static async wakeLogo() {
        AppView.animation('transform: scale(*%)', 'logo', 500, 0, 100, 60, false);
        AppView.animation('width: *px', 'logo', 500, 0, 48, 60, false);
    }
    static async activateGlass() {
        AppView.modify('protection-glass', 'opacity: 100%');
    }
    static async deactivateGlass() {
        AppView.modify('protection-glass', 'opacity: 0');
        AppView.modify('.protection-glass { opacity: 0 }');
    }
    static async configureGlass(transparency) {
        if (transparency === 'crystal') {

        }
        if (transparency === 'painted') {

        }
    }
}
class HomeController {
    static reloadHelp = false;
    static prays = {};
    static init() {
        HomeView.init();
        this.listenEdit();
        this.listenReload();
        this.listenScroll();
        this.listenControl();
    }
    static listenScroll() {
        const FIELD = window.document.getElementById('field');
        FIELD.addEventListener('scroll', () => {
            if (FIELD.scrollTop === 0) {
                HomeView.removeFieldShadow();
            } else {
                HomeView.shadeField();
            }
        });
    }
    static listenReload() {
        const RELOAD = window.document.getElementById('reload');
        RELOAD.addEventListener('click', () => location.reload());
    }
    static listenEdit() {
        const LOGO = window.document.getElementById('logo');
        LOGO.addEventListener('mouseenter', () => this.displayLogoPray());
        LOGO.addEventListener('mouseleave', () => this.hideLogoPray());
    }
    static listenControl() {
        const SAVE = window.document.getElementById('save');
        const ERASE = window.document.getElementById('erase');
        SAVE.addEventListener('mouseenter', () => this.displaySavePray());
        SAVE.addEventListener('mouseleave', () => this.hideSavePray());
        ERASE.addEventListener('mouseenter', () => this.displayErasePray());
        ERASE.addEventListener('mouseleave', () => this.hideErasePray());
    }
    static displayLogoPray() {
        this.prays['logo'] = HelpController.helpPray(3, 55, 'Редактировать');
    }
    static hideLogoPray() {
        HelpController.exit(this.prays['logo']);
    }
    static displaySavePray() {
        this.prays['save'] = HelpController.helpPray(3, 104, 'Сохранить');
    }
    static hideSavePray() {
        HelpController.exit(this.prays['save']);
    }
    static displayErasePray() {
        this.prays['erase'] = HelpController.helpPray(-3, 104, 'Стереть');
    }
    static hideErasePray() {
        HelpController.exit(this.prays['erase']);
    }
}
class HelpController {
    static helpers = {};
    static helpPray(x, y, prayText) {
        const HELP = window.document.createElement('div');
        HELP.className = 'help';
        if (x >= 0) {
            HELP.style.left = `${x}px`;
        } else {
            HELP.style.right = `${x * -1}px`;
        }
        if (y >= 0) {
            HELP.style.top = `${y}px`;
        } else {
            HELP.style.bottom = `${y * -1}px`;
        }
        HELP.textContent = prayText;
        const NEST = window.document.getElementById('helpers');
        NEST.appendChild(HELP);
        const ID = this.generateId();
        this.helpers[ID] = HELP;
        this.animation(HELP, 'appearance');
        return ID;
    }
    static async exit(id) {
        for (let item in this.helpers) {
            if (Number(item) === id) {
                const NEST = window.document.getElementById('helpers');
                const PRAY = this.helpers[id];
                await this.animation(PRAY, 'disappearance');
                NEST.removeChild(PRAY);
                return;
            }
        }
    }
    static generateId() {
        const IS_EXIST = experimental => {
            for (let id in this.helpers) {
                if (Number(id) === experimental) {
                    return true;
                }
            }
            return false;
        };
        for (let proposal = 1; true; proposal++) {
            if (IS_EXIST(proposal) === false) {
                return proposal;
            }
        }
    }
    static async animation(element, action) {
        const MOTIVATION = 10;
        return new Promise(resolve => {
            if (action === 'appearance') {
                let opacity = 0;
                const MOVEMENT = setInterval(() => {
                    element.style.opacity = opacity + '%';
                    opacity = opacity + MOTIVATION;
                    if (opacity > 100) {
                        clearInterval(MOVEMENT);
                        resolve();
                    }
                }, 15);
            }
            if (action === 'disappearance') {
                let opacity = 100;
                const MOVEMENT = setInterval(() => {
                    element.style.opacity = opacity + '%';
                    opacity = opacity - MOTIVATION;
                    if (opacity < 0) {
                        clearInterval(MOVEMENT);
                        resolve();
                    }
                }, 15);
            }
        });
    }
}
class DaddyView {
    static unlock() {
        const SCREENS_DADDY = window.document.getElementById('screens-daddy');
        SCREENS_DADDY.style.height = '100%';
    }
}
class Testing {
    
}
async function start() {
    LoadingView.open();
    LoadingView.show();
    LoadingView.play();
    await LoadingController.init();
    await LoadingView.stop();
    LoadingView.close();
    DaddyView.unlock();
    HomeController.init();

    // Test
    
    console.log('Hello, world!');
}
    
window.addEventListener('load', start);