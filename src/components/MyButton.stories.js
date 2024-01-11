import MyButton from './MyButton.vue';
import {screen, userEvent} from "@storybook/test";
import { expect } from '@storybook/jest';
import Login from "@/components/Login.vue";
import {waitFor} from '@storybook/testing-library'
/* import storybook-vue3-router */
import { vueRouter } from 'storybook-vue3-router'

/* ...story setup... */

/* your story export */




/**My botton*/
export default {
    // title: 'MyButton',
    component: MyButton,
    tags: ['autodocs']
    // argTypes: {
    //     backgroundColor: {control: 'color'}
    // }
};

const Template = (args) => ({
        components: { MyButton },

        setup() {
            return { args };
        },
        template: '<MyButton v-bind="args" > <router-view></router-view> </MyButton>',

});
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
export const Primary = Template.bind({});

Primary.args = {
   label: "Save",
    filled: true,
    // icon: "question",
};
const customRoutes = [
    {
        path: '/',
        name: 'login',
        component: Login // this would need to be defined/imported into the `.stories` file
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: AboutComponent // this would need to be defined/imported into the `.stories` file
    // }
]
/* adding storybook-vue3-router decorator */
Primary.decorators = [
    /* this is the basic setup with no params passed to the decorator */
    vueRouter(customRoutes)
]


Primary.play = async () => {

    const submitBtn = screen.getByRole('button', {
        selector: 'button'
    })

    const regBtn = screen.getByText('Зарегистрироваться', {
        selector: 'p'
    })

    await sleep(1000)

    await userEvent.click(submitBtn);

// console.log(submitBtn.style.backgroundColor)

    await expect(submitBtn.style.backgroundColor).toBe("rgb(245, 15, 103)");

    await sleep(1000)
    await userEvent.click(regBtn);
    await waitFor(() =>
        expect(screen.getByTestId('location-display')).toHaveTextContent('/login'),
    )
}
