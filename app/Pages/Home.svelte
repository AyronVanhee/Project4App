<page>
<stackLayout margin="0">
    <stackLayout>
        <listView heigth="*" items="{movies}" separatorColor="transparent"   borderRadius="16" on:itemTap={GoMovie} >
            <Template let:item={movie} >
                <gridLayout columns="125,*" rows="35, 130" padding="8" color="white"   >
                    <image  borderRadius="4" horizontalAlignment="left" stretch="aspectFill" row="0" col="0" rowSpan="2" src='{movie.Image}'></image>
                    <label class="c-title" marginLeft="8px" paddingTop="0" verticalAlignment="top" width="auto"  row="0" col="1" >{movie.Name}</label>        
                    <label overflow="hidden" marginLeft="8px" fontSize="14" row="1" col="1" textWrap="true">{movie.Description}</label>
                </gridLayout>
            </Template>
        </listView>
    </stackLayout>
    </stackLayout>
</page>


<script>
    import { navigate } from 'svelte-native';
    import { Template } from 'svelte-native/components';

    import Movie from './Movie.svelte';


    let movies=[{MovieID: "bf1a024b-9229-4b34-a559-b4ae3a1b6004",
                Name: "The World's End",
                Description:"The World's End is een Amerikaans-Britse-Japans apocalyptische sciencefictionkomedie uit 2013, geregisseerd door Edgar Wright, geschreven door Wright en Simon Pegg, en met Pegg, Nick Frost, Martin Freeman, Paddy Considine, Eddie Marsan en Rosamund Pike in de hoofdrollen. De film volgt vijf vrienden van middelbare leeftijd, die proberen een mislukte poging uit hun jongere jaren, een epische kroegentocht in de stad waarin ze zijn opgegroeid, dit keer wel te laten slagen. Tijdens hun tocht ontdekken ze een invasie van aliens.The World's End is na Shaun of the Dead (2004) en Hot Fuzz (2007) de derde film in de Blood and Ice Cream-trilogie.",
                Image:"~/Images/worldsend.jpg",
                Duration:109,
                Price:4,
                Genre:"Komedie",
                Year:2013,},
                {
                MovieID :"f882b046-1abd-4f38-a9cd-7b9dc8876138",
                Name : "Grease ",
                Description:"Grease is een Amerikaanse romantische filmmusical uit 1978 onder regie van Randal Kleiser. De productie is een verfilming van de gelijknamige musical Grease, over de jaren 1950. De film werd genomineerd voor de Oscar voor beste oorspronkelijke lied (Hopelessly Devoted to You van John Farrar) en de Golden Globes voor beste musical- of komediefilm, beste hoofdrolspeler in een musical- of komediefilm (John Travolta), beste actrice in een musical- of komediefilm (Olivia Newton-John), beste oorspronkelijke lied (Grease van Barry Gibb) en nogmaals voor beste oorspronkelijke lied (Hopelessly Devoted to You).",
                Image:"~/Images/grease.png",
                Duration:110,
                Price:1.5,
                Genre:"Muziek",
                Year:1978,
            },
            {
                MovieID: "32d41497-c4a4-4b4f-8ab8-6f5ec77681e6",
                Name: "Road House",
                Description:"Road House is een film uit 1989 met Patrick Swayze in de hoofdrol. De film gaat over 'Dalton', een uitsmijter in een bar in Jasper (Missouri). De regie is van Rowdy Herrington. Na het enorme succes van Dirty Dancing (de doorbraakfilm van Patrick Swayze) viel het bezoekersaantal voor 'Road House' flink tegen. De critici waren ook niet erg enthousiast over de film, die sindsdien wel tot een cultfilm is uitgegroeid.",
                Image:"~/Images/roadHouse.jpg",
                Duration:45,
                Price:15,
                Genre:"Actie",
                Year:1989,

            }];


    
    function GoMovie(args){ 
        console.log(`film ${movies[args.index].Name} is aangeklikt ${args.index}`)
        navigate({
            page: Movie,
            props: {movie: movies[args.index]}
        })
    }
    
</script>

<style>
.c-title{
    font-size:18px;
    font-weight: bold;
}

</style>