
import React ,{
    Component
}from 'react';
import {Animated, View, Easing, ImageBackground, TouchableOpacity, Dimensions, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class HomePage extends Component{
    constructor (props) {
        super(props);
        this.state = {
            anim: [1,2,3].map(() => new Animated.Value(0)), // 初始化3个值,
            top: new Animated.Value(0)
        };
        this.currentPageChange = this.currentPageChange.bind(this);
    }

    componentDidMount() {

        Animated.timing(this.state.top, {
            toValue: 1, // 目标值
            duration: 30000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        //
        // let timing = Animated.timing;
        //
        // Animated.sequence([
        //         // Animated.stagger(200, this.state.anim.map(left => {
        //         //     return timing(left, {
        //         //         toValue: 1,
        //         //     });
        //         // }).concat(
        //         //     this.state.anim.map(left => {
        //         //         return timing(left, {
        //         //             toValue: 0,
        //         //         });
        //         //     })
        //         // )), // 三个view滚到右边再还原，每个动作间隔200ms
        //         // timing(this.state.top, {
        //         //     toValue: 1
        //         // }),
        //         // Animated.delay(400), // 延迟400ms，配合sequence使用
        //         timing(this.state.anim[0], {
        //             toValue: -0.25
        //         }),
        //         timing(this.state.anim[1], {
        //             toValue: 0.45
        //         }),
        //         timing(this.state.anim[2], {
        //             toValue: 0.15
        //         }),
        //         Animated.delay(400),
        //     timing(this.state.anim[0], {
        //         toValue: 0.45
        //     }),
        //     timing(this.state.anim[1], {
        //         toValue: 0.15
        //     }),
        //     timing(this.state.anim[2], {
        //         toValue: -0.25
        //     }),
        //     Animated.delay(400),
        //     timing(this.state.anim[0], {
        //         toValue: 0.15
        //     }),
        //     timing(this.state.anim[1], {
        //         toValue: -0.25
        //     }),
        //     timing(this.state.anim[2], {
        //         toValue: 0.45
        //     }),
        //
        //         // Animated.parallel(this.state.anim.map((anim) => timing(anim, {
        //         //     toValue: 0
        //         // }))) // 同时回到原位置
        //     ]
        // ).start();
    }

    currentPageChange = (e, page) => {
        console.log(this.props);
        this.props.currentPageChange(page)
    }

    render() {
        let self = this;
        let top = [70, 130, 230];
        let colors = [
            ['#f77695', '#a050a9', '#55236a'],
            ['#55843e', '#446d76', '#7898b9'],
            ['#5b5078', '#b090a7', '#7484b8']
        ];
        let pages=['poetry', 'person', 'road'];
        let views = this.state.anim.map(function(value, i) {
            return (
                <Animated.View
                    key={i}
                    style={[{
                        left: value.interpolate({
                            inputRange: [0,1],
                            outputRange: [0,200]
                        })
                    }, {
                        top: -50*i+top[i]
                    }]}>
                    <TouchableOpacity style={styles.linearGradient} onPress={()=>self.currentPageChange(self, pages[i])}>
                        <LinearGradient colors={colors[i]} style={styles.demo}/>
                    </TouchableOpacity>
                </Animated.View>

            );
        });
        // ,{top: 70}, {left: -60}, {borderWidth: 2}, {width: 80}, {height: 80}

        return(
            <ImageBackground style={styles.wrap} source= {require('../../images/bg.gif')}>
                <Animated.View
                    style={[styles.container, {
                        transform: [{
                            rotateZ: this.state.top.interpolate({
                                inputRange: [0,1],
                                outputRange: ['360deg', '0deg']
                            })
                        }]
                    }]}>
                    {/*{views}*/}
                    <Animated.View
                        style={[{top: 70}, {left: -60}, {borderWidth: 2}, {width: 80}, {height: 80}, {
                            transform: [{
                                rotateZ: this.state.top.interpolate({
                                    inputRange: [0,1],
                                    outputRange: ['360deg', '0deg']
                                })
                            }]
                        }]}>
                        <TouchableOpacity style={styles.linearGradient} onPress={()=>self.currentPageChange(self, pages[0])}>
                            <LinearGradient colors={colors[0]} style={styles.demo}/>
                        </TouchableOpacity>
                    </Animated.View>
                    {/*<View*/}
                        {/*style={[{*/}
                            {/*transform: [{*/}
                                {/*rotateZ: this.state.top.interpolate({*/}
                                    {/*inputRange: [0,1],*/}
                                    {/*outputRange: ['360deg', '0deg']*/}
                                {/*})*/}
                            {/*}]*/}
                        {/*},{top: 170}, {left: 10}, {borderWidth: 2}, {width: 80}, {height: 80}*/}
                        {/*]}>*/}
                        {/*<TouchableOpacity style={styles.linearGradient} onPress={()=>self.currentPageChange(self, pages[1])}>*/}
                            {/*<LinearGradient colors={colors[1]} style={styles.demo}/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                    {/*<View*/}
                        {/*style={[{*/}
                            {/*transform: [{*/}
                                {/*rotateZ: this.state.top.interpolate({*/}
                                    {/*inputRange: [0,1],*/}
                                    {/*outputRange: ['360deg', '0deg']*/}
                                {/*})*/}
                            {/*}]*/}
                        {/*},{top: 10}, {left: 80}, {borderWidth: 2}, {width: 80}, {height: 80}*/}
                        {/*]}>*/}
                        {/*<TouchableOpacity style={styles.linearGradient} onPress={()=>self.currentPageChange(self, pages[2])}>*/}
                            {/*<LinearGradient colors={colors[2]} style={styles.demo}/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                </Animated.View>

            </ImageBackground>
            )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: 500,
        height: 400,
        alignItems: 'center',
        borderWidth:2,
    },
    linearGradient: {
        width: 65,
        height: 65,
        backgroundColor:'#504488',
        borderRadius: 40,
        opacity : 0.6
    },
    demo: {
        width: 65,
        height: 65,
        backgroundColor:'#504488',
        borderRadius: 40,
        transform: [{rotateZ:'45deg'}],
        opacity : 0.6
    },
    text: {
        fontSize: 30
    }
});
