export const allProjects = [
    {
        id: 1,
        title: "Project 1",
        description: "Cat ipsum dolor sit amet, hit you unexpectedly cats are cute for roll over and sun my belly, and meow loudly just to annoy owners. Climb leg catty ipsum lick yarn hanging out of own butt yet toy mouse",
        goal: 10,
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
        is_open: false,
        date_created: "2020-09-19T02:51:08Z",
        owner: {
            username: "admin",
            profile_image_url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
            user_bio: "Scratch me there, elevator butt terrorize the hundred-and-twenty-pound rottweiler and steal his bed,"
        },
        category: "Cat-egory"
    }
];

export const oneProject = {
    id: 1,
    title: "Project 1",
    description: "Cat ipsum dolor sit amet, hit you unexpectedly cats are cute for roll over and sun my belly, and meow loudly just to annoy owners. Climb leg catty ipsum lick yarn hanging out of own butt yet toy mouse",
    goal: 10,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
    is_open: false,
    date_created: "2020-09-19T02:51:08Z",
    owner: {
        username: "admin",
        profile_image_url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
        user_bio: "Scratch me there, elevator butt terrorize the hundred-and-twenty-pound rottweiler and steal his bed,"
    },
    category: "Cat-egory",
    pledges: [
        {
            id: 1,
            amount: 50,
            comment: "Meow!",
            anonymous: false,
            supporter: "admin",
            project_id: 1
        }
    ],
    pledge_total: 50,
    images: [
        {
            content_img_name: "Cat",
            content_img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        },
        {
            content_img_name: "Catto",
            content_img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
        }
    ]
}


