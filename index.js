// $("#target").click(function () {

// });

(function () {
    //make the request to fetch breed list and append it to the dropdown
    $.ajax({
        url: "https://dog.ceo/api/breeds/list/all",
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            let breeds = res.message;

            for (const key in breeds) {
                if (Object.hasOwnProperty.call(breeds, key)) {
                    $('.dropdown-cont select').append(`<option value="${key}">${key}</option>`);
                }
            }
        }
    });

    function getRandomImg(){
        $.ajax({
            url: `https://dog.ceo/api/breeds/image/random`,
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                let imgURL = res.message;
                $("img").attr("src",imgURL);
            }
        });
    }

    function getImgFromDropdown(){
        let breed = $(".dropdown-cont select option:selected").val();
        $.ajax({
            url: `https://dog.ceo/api/breed/${breed}/images/random`,
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                let imgURL = res.message;
                // console.log(imgURL);
                $("img").attr("src",imgURL);
            }
        });
    }

    $('.get-img-btn-cont').click(getRandomImg);
    $('.img-cont button').click(getImgFromDropdown);
    



})();