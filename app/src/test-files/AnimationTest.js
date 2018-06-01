
import React ,{
    Component
}from 'react';
import {Animated, View, Easing, TouchableOpacity, Dimensions, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class AnimationTest extends Component{
    constructor (props) {
        super(props);
        this.state = {
            anim: [1,2,3].map(() => new Animated.Value(0)), // 初始化3个值,
            top: new Animated.Value(0)
        };
        this.currentPageChange = this.currentPageChange.bind(this);
    }

    componentDidMount() {
        let timing = Animated.timing;
        Animated.sequence([
                // Animated.stagger(200, this.state.anim.map(left => {
                //     return timing(left, {
                //         toValue: 1,
                //     });
                // }).concat(
                //     this.state.anim.map(left => {
                //         return timing(left, {
                //             toValue: 0,
                //         });
                //     })
                // )), // 三个view滚到右边再还原，每个动作间隔200ms
                // timing(this.state.top, {
                //     toValue: 1
                // }),
                // Animated.delay(400), // 延迟400ms，配合sequence使用
                timing(this.state.anim[0], {
                    toValue: -0.25
                }),
                timing(this.state.anim[1], {
                    toValue: 0.45
                }),
                timing(this.state.anim[2], {
                    toValue: 0.15
                }),
                // Animated.delay(400),
                // Animated.parallel(this.state.anim.map((anim) => timing(anim, {
                //     toValue: 0
                // }))) // 同时回到原位置
            ]
        ).start();
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
                            <LinearGradient colors={colors[i]} style={styles.linearGradient}/>
                        </TouchableOpacity>
                    </Animated.View>

            );
        });
        return <View style={styles.container}>
            {views}
        </View>;

    }
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // width: width,
        height: 400,
        alignItems: 'center',
    },
    linearGradient: {
        width: 65,
        height: 65,
        backgroundColor:'#504488',
        borderRadius: 40,
        // transform: [{rotateZ:'45deg'}],
        opacity : 0.7
    },
    demo: {
        width: 50,
        height: 50,
        backgroundColor:'#504488',
        borderRadius: 25,
    },
    text: {
        fontSize: 30
    }
});
