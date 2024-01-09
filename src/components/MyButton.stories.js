import MyButton from './MyButton.vue';

export default {
    component: MyButton,
};

const Template = (args) => ({
        components: { MyButton },
        setup() {
            return { args };
        },
        template: '<MyButton v-bind="args" />',

});

export const FirstStory = Template.bind({});

FirstStory.args = {
   label: "Save",
    filled: true,
};
