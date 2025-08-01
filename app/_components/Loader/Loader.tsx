import styles from './loader.module.css';


interface Props {
    marginTop?: number;
    textAlign?: 'center' | 'left' | 'right'
}

function Loader({marginTop=0, textAlign= 'left'}:Props) {
    const style = {
        marginTop : marginTop+'px',
        textAlign: textAlign
    }
    return (
        <div className={styles.loader} style={style}>
        </div>
    )
}

export default Loader
