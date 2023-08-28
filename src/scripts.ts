interface AnimalImage {
    id: string;
    url: string;
    width: number;
    height: number;
}

document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById("content-container");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    const BASE_URL = "http://localhost:8080";

    button1.addEventListener("click", () => {
        loadContent(`${BASE_URL}/Menu1`);
    });

    button2.addEventListener("click", () => {
        loadContent(`${BASE_URL}/Menu2`);
    });

    function loadContent(url: string) {
        fetch(url)
            .then(response => response.json())
            .then((data: AnimalImage[]) => {
                contentContainer.innerHTML = "";

                data.forEach(Image => {
                    const imageElement = document.createElement("img");
                    imageElement.src = Image.url;
                    imageElement.classList.add("image-item");
                    contentContainer.appendChild(imageElement);
                });
            })
            .catch(error => {
                console.error("Error loading content:", error);
            });
    }
});
