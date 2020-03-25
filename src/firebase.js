import { initializeApp} from  'firebase'

const app =  initializeApp(
    {
        apiKey: "AIzaSyBScdKSZb_TL0GY-SRbzfG8LP48-vOy0gU",
        authDomain: "codenames-22d82.firebaseapp.com/",
        databaseURL: "https://codenames-22d82.firebaseio.com"
    }
)

export const db = app.database();
export const wordsRef = db.ref('words_basic');
export const cardsRef = db.ref('cards');
