import MyButton from './MyButton.vue';

export default {
    // title: 'MyButton',
    component: MyButton,
    // argTypes: {
    //     backgroundColor: {control: 'color'}
    // }
};

const Template = (args) => ({
        components: { MyButton },
        setup() {
            return { args };
        },
        template: '<MyButton v-bind="args" />',

});

export const Primary = Template.bind({});

Primary.args = {
   label: "Save",
    filled: true,
    // icon: "question",
};
