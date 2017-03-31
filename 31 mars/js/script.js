    // Attendre le chargement du DOM
    $(document).ready(function(){  




            // Créer une variable pour le titre principal du site
            var siteTitle = 'Zazi <span>boblibloalo</span>';


            // Créer un tableau pour la nav
            var myNav = [  'Acceuil','Portfolio','Contact,'];
         
         
            // Créer un objet pour les titres des pages
            var myTitles  = {
                    Acceuil: 'Bienvenue sur la page',
                    Portfolio: 'Découvrez mes travaux',
                    Contact: 'Contactez-moi pour plus d\'information',

            };



            // Créer un objet pour le contenu des pages
            var myContent = {
                Acceuil:'<h3>Contenu de la page Acceuil</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident, sed accusantium voluptatum corporis fugiat nesciunt laudantium, consectetur consequatur ab excepturi, dolore inventore praesentium unde a id nam itaque nobis!</p>',
                Portfolio:'<h3>Contenu de la page Portfolio</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident, sed accusantium voluptatum corporis fugiat nesciunt laudantium, consectetur consequatur ab excepturi, dolore inventore praesentium unde a id nam itaque nobis!</p>',
                Contact:'<h3>Contenu de la page Contact</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident, sed accusantium voluptatum corporis fugiat nesciunt laudantium, consectetur consequatur ab excepturi, dolore inventore praesentium unde a id nam itaque nobis!</p>',
            }

            
            

            // Afficher dans la console le header et le mettre dans une variable
            var myHeader = $('header');

                // Génerer (Créer) une balise h1 dans le header avec le contenu de variable siteTitle

                myHeader.append('<h1>' + siteTitle + '</h1>');

                // Générer une balise nav + ul dans le header
                myHeader.append('<nav><i class="fa fa-bars" aria-hidden="true"></i><ul></ul></nav>');

                // Faire une boucle sur myNav pour générer les liens de la nav
                for (var i = 0; i < myNav.length; i++){
                    console.log(myNav[i]);

                    // Générer(créer) les balises html
                     $('ul').append('<li><a href="' + myNav[i] + '">' + myNav[i] + '</a></li>');

                };

                // Afficher dans le main le titre issu de l'objet myTitles
                var myMain = $('main');
                myMain.append('<h2>' + myTitles.Acceuil+ '</h2>');

                myMain.append('<section' +myContent.Acceuil + '</section');


                
                // Capter l'événement click sur les balises a en bloquant le comportement naturel des balises a 
                        // Sélection
                        $('a').click(function(evt){
                            
                        //Bloquer le comportement naturel des balises a
                        evt.preventDefault();

                        // Connaitre l'occurence de la balise a sur laquelle l'utilisateur à cliquer
                         console.log($(this));

                        //  Récupérer la valeur de l'attribut href
                        console.log ($(this).attr('href'));

                        // Vérifier la valeur de l'attribut href pour afficher le bon titre
                        if($(this).attr('href') == 'Acceuil'){
                                // Sélectionner la balise h2 pour changer le contenu
                                $('h2').text(myTitles.Acceuil);


                                // Sélectionner la section pour changer le contenu (.html car il y  a des balises donc pas .text)
                                $('section').html(myContentAcceuil);


                        } else if ($(this).attr('href') == 'Portfolio'){
                               $('h2').text(myTitles.Portfolio);

                                 // Sélectionner la section pour changer le contenu (.html car il y  a des balises donc pas .text)
                                 $('section').html(myContentPortflio);

                        
                        } else {
                               $('h2').text(myTitles.Contact);

                                // Sélectionner la section pour changer le contenu (.html car il y  a des balises donc pas .text)
                               $('section').html(myContentContact);
                        };

                         
                    



                    });
            

    
    
    




    // Fin de la fonction de chargement du DOM
      });