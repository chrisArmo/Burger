/**
 * Burger Handler
 */

// Global Variables
// ----------------------------------------
const addBurgerButton = $(".add-burger"),
devourButton = $(".devour"),
digestButton = $(".digest");

// Functions
// ----------------------------------------

// Capitalize
const capitalize = (word) => `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`;

// Title Case
const title = (words) => words.split(" ").map(capitalize).join(" ");

// Add Burger
const addBurger = function(e) {
    const burgerPattern = /^[a-z]{2,20}(\s[a-z]{2,20}){0,5}$/i,
    burgerName = title($(".added-burger").val().trim());    
    if (burgerPattern.test(burgerName)) {
        $(".added-burger").val("");
        $.ajax({
            url: "/burgers",
            method: "POST",
            data: {burgerName}
        }).then(() => {
            location.reload();
        });
    }
};

// Update Burger
const devourBurger = function(e) {
    const id = $(this).closest(".burger").data("id");
    $.ajax({
        url: `/burgers/${id}`,
        method: "PUT",
        data: {devoured: true}
    }).then(() => {
        location.reload();
    });
};

// Delete burger
const digestBurger = function(e) {
    const id = $(this).closest(".burger").data("id");
    $.ajax({
        url: `/burgers/${id}`,
        method: "DELETE",
        data: {devoured: true}
    }).then(() => {
        location.reload();
    });
};

// Main
// ----------------------------------------

// Add burger listener
addBurgerButton.on("click", addBurger);

// Eat burger listener
devourButton.on("click", devourBurger);

// Digest burger listener
digestButton.on("click", digestBurger);
