class Food {
    constructor() {
        this.cake = createButton("🍰");
        this.salad = createButton("🥗");
        this.chilli = createButton("🌶");
    }

    hide() {
        this.cake.hide();
        this.salad.hide();
        this.chilli.hide();
    }

    display() {
        this.cake.show();
        this.salad.show();
        this.chilli.show();

        this.cake.position(300, 140);
        this.salad.position(300, 200);
        this.chilli.position(300, 260);

        this.cake.size(50, 50);
        this.salad.size(50, 50);  
        this.chilli.size(50, 50); 

        this.cake.style("font-size", "23px");
        this.salad.style("font-size", "23px");
        this.chilli.style("font-size", "23px");

        this.cake.style("border-radius", "23px");
        this.salad.style("border-radius", "23px");
        this.chilli.style("border-radius", "23px");

        this.cake.style("outline", "none");
        this.salad.style("outline", "none");
        this.chilli.style("outline", "none");

        this.cake.mousePressed(() => {
        });

        this.salad.mousePressed(() => {
            gameState = 3;
        });

        this.chilli.mousePressed(() => {
            gameState = 4;
        });
    }
}
