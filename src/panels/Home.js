import React from 'react';
import {
    Panel,
    PanelHeader,
    Button,
    Group,
    Div,
    Header,
    FormLayout,
    FormItem, HorizontalCell, HorizontalScroll, Footer
} from '@vkontakte/vkui';
import bridge from "@vkontakte/vk-bridge";
import {Icon12FlashCircle} from "@vkontakte/icons";


const Home = props => {
    let {values, disabled} = props.state;

    const startFlash = () => {
        props.setPState({disabled: true});

        const cycle = () => {
            for (let i = 1; i < 9; i++) {
                console.log(i)
                setTimeout(() => {
                    console.log(i, i === 8, disabled)

                    if (!disabled) {
                        setFlash(values.includes(i))
                    }
                    if (i === 8 && !disabled) {
                        setTimeout(cycle, 1000)
                    }
                }, i * 1000)
            }
        }
        cycle()
        const setFlash = (v) => {
            console.log(v)
            bridge.send("VKWebAppFlashSetLevel", {"level": v ? 1 : 0});
        }
    }

    return (
        <Panel id={props.id}>
            <PanelHeader>Бит Фонарик</PanelHeader>
            <HorizontalScroll>
                <Div style={{display: 'flex', padding: 20}}>
                    <Button
                        mode={values.includes(1) ? 'primary' : 'secondary'}
                        onClick={() => {
                            if (!values.includes(1)) {
                                values.push(1);
                            } else {
                                values = values.filter(e => e !== 1)
                            }
                            props.setPState({values});
                        }}
                    >
                        <Icon12FlashCircle/>
                    </Button>
                    <Button
                        mode={values.includes(2) ? 'primary' : 'secondary'}
                        onClick={() => {
                            if (!values.includes(2)) {
                                values.push(2);
                            } else {
                                values = values.filter(e => e !== 2)
                            }
                            props.setPState({values});
                        }}
                        style={{
                            marginLeft: 5
                        }}
                    >
                        <Icon12FlashCircle/>
                    </Button>
                    <Button
                        mode={values.includes(3) ? 'primary' : 'secondary'}
                        onClick={() => {
                            if (!values.includes(3)) {
                                values.push(3);
                            } else {
                                values = values.filter(e => e !== 3)
                            }
                            props.setPState({values});
                        }}
                        style={{
                            marginLeft: 5
                        }}
                    >
                        <Icon12FlashCircle/>
                    </Button>
                    <Button
                        mode={values.includes(4) ? 'primary' : 'secondary'}
                        onClick={() => {
                            if (!values.includes(4)) {
                                values.push(4);
                            } else {
                                values = values.filter(e => e !== 4)
                            }
                            props.setPState({values});
                        }}
                        style={{
                            marginLeft: 5
                        }}
                    >
                        <Icon12FlashCircle/>
                    </Button>
                    <Button
                        mode={values.includes(5) ? 'primary' : 'secondary'}
                        onClick={() => {
                            if (!values.includes(5)) {
                                values.push(5);
                            } else {
                                values = values.filter(e => e !== 5)
                            }
                            props.setPState({values});
                        }}
                        style={{
                            marginLeft: 5
                        }}
                    >
                        <Icon12FlashCircle/>
                    </Button>
                    <Button
                        mode={values.includes(6) ? 'primary' : 'secondary'}
                        onClick={() => {
                            if (!values.includes(6)) {
                                values.push(6);
                            } else {
                                values = values.filter(e => e !== 6)
                            }
                            props.setPState({values});
                        }}
                        style={{
                            marginLeft: 5
                        }}
                    >
                        <Icon12FlashCircle/>
                    </Button>
                    <Button
                        mode={values.includes(7) ? 'primary' : 'secondary'}
                        onClick={() => {
                            if (!values.includes(7)) {
                                values.push(7);
                            } else {
                                values = values.filter(e => e !== 7)
                            }
                            props.setPState({values});
                        }}
                        style={{
                            marginLeft: 5
                        }}
                    >
                        <Icon12FlashCircle/>
                    </Button>
                    <Button
                        mode={values.includes(8) ? 'primary' : 'secondary'}
                        onClick={() => {
                            if (!values.includes(8)) {
                                values.push(8);
                            } else {
                                values = values.filter(e => e !== 8)
                            }
                            props.setPState({values});
                        }}
                        style={{
                            marginLeft: 5,
                            marginRight: 30
                        }}
                    >
                        <Icon12FlashCircle/>
                    </Button>
                </Div>
            </HorizontalScroll>
            <Footer> Лента скроллится </Footer>
            <Div>
                <Div>
                    <Button
                        size='l'
                        stretched
                        disabled={disabled}
                        onClick={startFlash}
                    >
                        Запустить
                    </Button>
                </Div>
                <Div>
                    <Button
                        size='l'
                        stretched
                        disabled={!disabled}
                        onClick={() => {
                            window.location.reload()
                        }}
                    >
                        Отстановить
                    </Button>
                </Div>
            </Div>

            {props.state.snackbar}
        </Panel>
    );
}

export default Home;
