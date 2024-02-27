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

    }
}
class LoadingModel {
    static getScreensText() {

    }
}
async function start() {

    // Test
    LoadingView.open();
    LoadingView.show();
    LoadingView.play();
    await LoadingView.stop();
    LoadingView.close();
    console.log('Hello, world!');
}
    
window.addEventListener('load', start);