import { ICharacter } from '../types'

interface ICharacterCardProps {
    character: ICharacter
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