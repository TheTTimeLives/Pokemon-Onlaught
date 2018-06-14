var bulbasaursound = new Audio('assets/sound/bulbasaur.mp3');
        var ivysaursound = new Audio('../assets/sound/ivysaur.mp3');
        var venusaursound = new Audio('../assets/sound/venusaur.mp3');
        var bulbasaurxp = 0;
        var charmandersound = new Audio('../assets/sound/charmander.mp3');
        var charizardsound = new Audio('../assets/sound/charizard.mp3');
        var charmeleonsound = new Audio('../assets/sound/charmeleon.mp3');
        var charmanderxp = 0;
        var squirtlesound = new Audio('../assets/sound/squirtle.mp3');
        var wartortlesound = new Audio('../assets/sound/wartortle.mp3');
        var blastoisesound = new Audio('../assets/sound/blastoise.mp3');
        var squirtlexp = 0;
        var pokemontheme = new Audio('assets/sound/pokemontheme.mp3');
        var randomnumber = "";
        var redcrystal;
        var bluecrystal;
        var greencrystal;
        var yellowcrystal;
        var enemyhealth = Math.floor(Math.random() * 101) + 1;
        var enemyrandom = Math.floor(Math.random() * 75);
        var enemysound = new Audio('../assets/sound/enemy/' + enemyrandom + '.mp3')
        var redcrystalrandom = Math.floor(Math.random() * 12) + 1;
        var bluecrystalrandom = Math.floor(Math.random() * 12) + 1;
        var greencrystalrandom = Math.floor(Math.random() * 12) + 1;
        var yellowcrystalrandom = Math.floor(Math.random() * 12) + 1;
        var sum = 0;
        var wins = 0;
        var losses = 0;
        enemysound.play();
        pokemontheme.loop = true;
        pokemontheme.play();
        $('.enemy').attr('src', '../assets/images/enemy/' + enemyrandom + '.png');
        $('.enemy').click(function () {
            enemysound.play();
        })
        console.log(enemyrandom);



        var reset = function () {
            randomnumber = "";
            redcrystal;
            bluecrystal;
            greencrystal;
            yellowcrystal;
            enemy = Math.floor(Math.random() * 75);
            enemyhealth = Math.floor(Math.random() * 101) + 20;
            enemyrandom = Math.floor(Math.random() * 75);
            enemysound = new Audio('../assets/sound/enemy/' + enemyrandom + '.mp3')
            redcrystalrandom = Math.floor(Math.random() * 12) + 1;
            bluecrystalrandom = Math.floor(Math.random() * 12) + 1;
            greencrystalrandom = Math.floor(Math.random() * 12) + 1;
            yellowcrystalrandom = Math.floor(Math.random() * 12) + 1;
            sum = 0;
            $('.value').off('click');
            $(".value").html("CLICK POKEMON FOR VALUES");
            $(".win").html("WINS: " + wins);
            $(".lose").html("LOSSES: " + losses);
            $('.enemy').attr('src', 'assets/images/enemy/' + enemyrandom + '.png');
            $('.enemy').click(function () {
                enemysound.play();
            })
            pokemontheme.loop = true;
            pokemontheme.play();
            console.log(enemyrandom);

            redcrystal = redcrystalrandom;
            console.log("charmander: " + redcrystal);
            bluecrystal = bluecrystalrandom;
            console.log("squirtle: " + bluecrystal);
            greencrystal = greencrystalrandom;
            console.log("bulbasaur: " + greencrystal);
            $(".enemyhealth").html("Lvl: " + enemyhealth);
            console.log("enemy: " + enemyhealth);
            enemysound.play();

            if (bulbasaurxp >= 1) {
                ivysaursound.play();
                bulbasaursound = new Audio('../assets/sound/ivysaur.mp3');
            }

            if (bulbasaurxp >= 2) {
                venusaursound.play();
                bulbasaursound = new Audio('../assets/sound/venusaur.mp3');
            }

            if (charmanderxp >= 1) {
                charmeleonsound.play();
                charmandersound = new Audio('../assets/sound/charmeleon.mp3');
            }

            if (charmanderxp >= 2) {
                charizardsound.play();
                charmandersound = new Audio('../assets/sound/charizard.mp3');
            }

            if (squirtlexp >= 1) {
                squirtlesound = new Audio('../assets/sound/wartortle.mp3');
            }

            if (squirtlexp >= 2) {
                squirtlesound = new Audio('../assets/sound/blastoise.mp3');
            }





        }

        $(document).ready(function () {

            redcrystal = redcrystalrandom;
            console.log("charmander: " + redcrystal);
            bluecrystal = bluecrystalrandom;
            console.log("squirtle: " + bluecrystal);
            greencrystal = greencrystalrandom;
            console.log("bulbasaur: " + greencrystal);

            $(".enemyhealth").html("Lvl: " + enemyhealth);
            console.log("enemy: " + enemyhealth);





            $(".charmander").click(function () {
                $(".info").fadeTo("slow", 0, function () {
                    // Animation complete.
                });
                charmandersound.play();
                sum = sum + redcrystal;
                // sum += redcrystalrandom;
                $(".value").html(sum);

                if (sum === enemyhealth) {
                    console.log("Win");
                    wins++;
                    charmanderxp++;

                    $(".value").html("YOU WIN. PLAY AGAIN?");

                    $(".value").click(function () {
                        reset();
                    })
                }

                if (sum > enemyhealth) {
                    console.log("Lose");
                    losses++;

                    $(".value").html("YOU LOSE. PLAY AGAIN?");

                    $(".value").click(function () {
                        reset();
                    })
                }


                if (charmanderxp >= 1) {
                    $(".charmander").attr('src', "../assets/images/charmeleon.png");
                }

                if (charmanderxp >= 2) {
                    $(".charmander").attr('src', "../assets/images/charizard.png");
                }

            })

            $(".squirtle").click(function () {
                $(".info").fadeTo("slow", 0, function () {
                    // Animation complete.
                });
                squirtlesound.play();
                sum = sum + bluecrystal;
                // sum += redcrystalrandom;
                $(".value").html(sum);

                if (sum === enemyhealth) {
                    console.log("Win");
                    squirtlexp++;
                    wins++;

                    $(".value").html("YOU WIN. PLAY AGAIN?");

                    $(".value").click(function () {
                        reset();
                    })
                }

                if (sum > enemyhealth) {
                    console.log("Lose");
                    losses++;

                    $(".value").html("YOU LOSE. PLAY AGAIN?");

                    $(".value").click(function () {
                        reset();
                    })
                }

                if (squirtlexp >= 1) {
                    $(".squirtle").attr('src', "../assets/images/wartortle.png");
                }

                if (squirtlexp >= 2) {
                    $(".squirtle").attr('src', "../assets/images/blastoise.png");
                }




            })

            $(".bulbasaur").click(function () {
                $(".info").fadeTo("slow", 0, function () {
                    // Animation complete.
                });
                bulbasaursound.play();
                sum = sum + greencrystal;
                // sum += redcrystalrandom;
                $(".value").html(sum);

                if (sum === enemyhealth) {
                    console.log("Win");
                    bulbasaurxp++;
                    wins++;

                    $(".value").html("YOU WIN. PLAY AGAIN?");

                    $(".value").click(function () {
                        reset();
                    })
                }

                if (sum > enemyhealth) {
                    console.log("Lose");
                    losses++;

                    $(".value").html("YOU LOSE. PLAY AGAIN?");

                    $(".value").click(function () {
                        reset();
                    })
                }

                if (bulbasaurxp >= 1) {
                    $(".bulbasaur").attr('src', "../assets/images/ivysaur.png");
                }

                if (bulbasaurxp >= 2) {
                    $(".bulbasaur").attr('src', "../assets/images/venusaur.png");
                }



            })








        });
  