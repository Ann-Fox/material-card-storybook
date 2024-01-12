import ButtonLevelTwo from "@/components/ButtonLevelTwo.vue";

export default {
    title: "Level2/Button",
    component: ButtonLevelTwo
}

// export const ButtonONE = {
//     render: () => ({
//         components: {ButtonLevelTwo},
//         template: '<ButtonLevelTwo />',
//     }),
// };

// CSF 2 story
// export const ButtonONE = (args) => ({
//     components: { ButtonLevelTwo },
//     setup(){
//         return { args };
//     },
//     template: '<ButtonLevelTwo />',
// });

// объект истории в CSF 3 с явной render функцией
export const ButtonONE = {
    render: (args) => ({
        components: {ButtonLevelTwo},
        setup() {
            return {args};
        },
        template: '<ButtonLevelTwo v-bind="agrs"/>',
    }),
    args: {
        primary: true,
        label: "Button",
        backgroundColor: '',
        size: '',
        onClick: '-'
    }
};


export const WithProp = {
    render: () => ({
        components: {ButtonLevelTwo},
        template: '<ButtonLevelTwo prop="value"/>',
    }),
};


export const Simple = {
    name: 'So simple!',  //named export название кнопки вместо Simple
}


export const Primary = (args) => ({ //кнопка без оформления и текста
    //components: { ButtonLevelTwo },
    setup() {
        return {args};
    },
    template: '<Button v-bind="args" />',
});
Primary.args = {primary: true};


// копирует аргументы Primary
export const PrimaryOnDark = Primary.bind({});
PrimaryOnDark.args = Primary.args;
PrimaryOnDark.parameters = {background: {default: 'dark'}};
