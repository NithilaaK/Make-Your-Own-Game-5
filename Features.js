class Features {
    constructor() {
        this.feedButton = createButton("🍕");
        this.playButton = createButton("🏀");
        this.sleepButton = createButton("🛌");
        this.homeButton = createButton("🛋")
    }

    hide() {
        this.playButton.hide();
        this.feedButton.hide();
        this.sleepButton.hide();
        this.homeButton.hide();
    }

    display() {
        this.playButton.show();
        this.feedButton.show();
        this.sleepButton.show();
        this.homeButton.show();

        this.playButton.position(29, 452);
        this.feedButton.position(94, 452);
        this.sleepButton.position(161, 452);
        this.homeButton.position(231, 452);

        this.playButton.size(50, 50);
        this.feedButton.size(50, 50);  
        this.sleepButton.size(50, 50); 
        this.homeButton.size(50, 50);

        this.playButton.style("font-size", "23px");
        this.feedButton.style("font-size", "23px");
        this.sleepButton.style("font-size", "23px");
        this.homeButton.style("font-size", "33px");

        this.playButton.style("border-radius", "23px");
        this.feedButton.style("border-radius", "23px");
        this.sleepButton.style("border-radius", "23px");
        this.homeButton.style("border-radius", "33px");

        this.playButton.style("outline", "none");
        this.feedButton.style("outline", "none");
        this.sleepButton.style("outline", "none");
        this.homeButton.style("outline", "none");

        this.playButton.mousePressed(() => {
            gameState = 2;
            trampGameState = 0;
        });

        this.feedButton.mousePressed(() => {
            gameState = 3;
        });

        this.sleepButton.mousePressed(() => {
            gameState = 4;
            jumpToSleep = 0;
        });

        this.homeButton.mousePressed(() => {
            gameState = 5;
        });
    }
}