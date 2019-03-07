<template>
    <div>
        <h1>Posts</h1>
        <ul>
            <li><router-link to="/posts/1">Post 1</router-link></li>
            <li>
                <router-link :to="{name: 'signle-post', params: {id :2}, query: }">
                    Post 2
                </router-link>
            </li>
            <li><router-link to="/posts/3">Post 3</router-link></li>
        </ul>
    </div>
</template>
