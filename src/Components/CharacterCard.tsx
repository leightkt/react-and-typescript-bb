import { ICharacter } from '../types'

interface ICharacterCardProps {
    character: ICharacter;
    // randomFunction: (url: string, id: number) => void
    randomFunction: (url: string, id: number) => number
    // randomFunction: (event: Event) => number

}

// const CharacterCard:  React.FC = (props) => {
//     return (
//         <h2>Character Card</h2>
//     )
// }

// const CharacterCard = (props: ICharacterCardProps) => {

const CharacterCard:  React.FC<ICharacterCardProps> = ({ character }) => {
    return (
        <h2>{ character.name }</h2>
    )
}

export default CharacterCard