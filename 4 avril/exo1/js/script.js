$(document).ready(function(){
    console.log('Le DOM est chargé');


        // fonction animate()
        $('section:first button').click(function(){
            console.log('click');

                // Changer la couleur de fond et la largeur de l'article
                $('section:first article').animate({
                       height:'20rem',
                       width:'20rem',
                });

            });

                // fonction animate()valeurs dynamiques
                $('section:nth-child(2) button').click(function(){

                    $('section:nth-child(2) article').animate({

                        // Pas d'espace entre le += et le .5rem
                        left:'+=1rem',
                        top:'-=1rem',
                        
                    });
                
        });



            // Fonction animate():toggle/show/hide
            $('section:nth-child(3) button').click(function(){

                $('section:nth-child(3) article').animate({

                    // Enlève ou ajoute le carré
                    width:'toggle',
                });

            });


            // Fonction animate() avec durée et callback
            $('section:last button').click(function(){

                    $('section:last article').animate({

                        width:'20rem',
                        height:'30rem',
                
            // JS compte en milli seconde du coup on utilise 2000
        }, 2000,function(){
             
            //Indiquation que l'animation se termine
            alert("Fin de l'animation");
            //  A la fin de l'animation  la balise disparait
            $(this).hide();

            });

        });


//Fin de la fonction
});