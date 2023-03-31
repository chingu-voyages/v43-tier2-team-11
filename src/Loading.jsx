import classes from './Loading.module.scss';

const Loading = () => {
    return (
        <section className={classes['loading']}>
            <div className={classes['loading__spiner']}></div>
        </section>
    )
}
export default Loading;