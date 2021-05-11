const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: "About Me",
        width: "400px",
        height: "400px",
        class: ["no-full"],
        mount: aboutContent,
        onfocus: function() {
            this.setBackground("#00df00");
            if (window.innerWidth < 400) {
                this.resize("85%", "60%");
            }
        },
        onblur: function() {
            this.setBackground("#555");
        },
    });
});

contact.addEventListener("click", () => {
    const contactBox = new WinBox({
        title: "Contact Me",
        width: "400px",
        height: "400px",
        class: ["no-full"],
        mount: contactContent,
        onfocus: function() {
            this.setBackground("#00df00");
            if (window.innerWidth < 400) {
                this.resize("95%", "60%");
            }
        },
        onblur: function() {
            this.setBackground("#555");
        },
    });
});