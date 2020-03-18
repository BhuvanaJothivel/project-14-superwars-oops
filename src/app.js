const PLAYERS = [
    "Spiderman",
    "Captain America",
    //"Wonderwoman",
    // "Popcorn",
     "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
];

// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        // Type your code
            this.id=id;
            this.name=name;
            this.strength = this.getRandomStrength();
            this.image = "images/super-" + (id + 1) + ".png"
            this.type = type;

    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    view = () => {

        let players = document.createElement('div');
        players.classList.add('player');
        players.setAttribute('data-id', this.id);
        let image = document.createElement('img');
        image.setAttribute('src', this.image);
        let playerName = document.createElement('div');
        playerName.textContent = this.name;
        let strength = document.createElement('div');
        strength.textContent = this.strength;
        strength.className = 'strength';
        players.append(image, playerName, strength);
        return players;
        
    }
}

// Superwar Class
class Superwar {
        constructor(player) {
            this.player = player.map((player, n) => {
                let type = '';
                if((n % 2 == 0))
                    type = 'hero'; 
                else
                    type = 'villain';
                return new Player(n, player, type);
            });

    }

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =
            this.buildPlayers('hero');
        team.append(fragment);

        team = document.getElementById('villains');
        team.innerHTML = '';
        fragment =
            this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players
            .filter(player => player.type == type)
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}
