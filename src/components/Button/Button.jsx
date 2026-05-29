import styles from './button.module.css'

function Botao({nome}){
    return (
        <div classNme={styles.botoes}>
        <button>{nome}</button>

        </div>
    )
    };

export default Botao