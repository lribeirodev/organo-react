import './Footer.scss'

export const Footer = () => {
    return (
        <section className='cmp-footer'>
            <div className='cmp-footer__container'>
                <div className='cmp-footer__container__social'>
                    <img src='./imagens/fb.png' />
                    <img src='./imagens/tw.png' />
                    <img src='./imagens/ig.png' />
                </div>
                <div className='cmp-footer__container__logo'>
                    <img src='./imagens/logo.png' />
                </div>
                <div className='cmp-footer__container__author'>
                    Desenvolvido por Lucas Ribeiro
                </div>
            </div>
        </section>
    )
}

export default Footer