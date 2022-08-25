
import React from 'react'

interface Props {
    btnText: string
}

const DesertForm = ({btnText}:Props) => {
  return (
    <div>
        <form >
            <div>
                <label htmlFor="name">Sobremesa</label>
                <input type="text" name="name" placeholder="Ex:Pudim" />
            </div>
            <div>
                <label htmlFor="difficulty">Dificuldade</label>
                <input type="number" name="difficulty" placeholder=" Dificuldade de 1 ( muito fácil) à 5 (muito difícil)" />
            </div>
            <div>
                <input type="submit" value={btnText} />
            </div>

            

        </form>
    </div>
  )
}

export default DesertForm