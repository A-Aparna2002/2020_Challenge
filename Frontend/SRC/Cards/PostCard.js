import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

const fetchPosts = async () => {
    try {
        const response = await fetch('http://localhost/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const profile = 'https://url.jpg';

const PostCard = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const data = await fetchPosts();
        setPosts(data);
      };
      fetchData();
    }, [fetchPosts]);
    const renderItem = ({ item }) => (
        <View style={styles.container}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <Image
                    source={{ uri: item.user.profilePic || profile }}
                    style={{ width: 40, height: 40, borderRadius: 20, marginStart: 10 }}
                />
                <Text style={styles.username}>{item.user.username}</Text>
            </View>
            
            <Image source={{ uri: item.image }} style={styles.image} />
            {item.caption && <Text style={styles.commentText}>{item.caption}</Text>}
        </View>
    );
    
    const handleRefresh = async () => {
        const data = await fetchPosts();
        setPosts(data);
    };

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            refreshing={!posts.length}
            onRefresh={handleRefresh}
        />
    );
};

export default PostCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        marginVertical: 10,
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 1,
    },
    c1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: 'black',
    },
    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 5,
    },
    username: {
        color: 'white',
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    s2: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
    },
    s21: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    s22: {
        marginLeft: 20,
    },
    s3: {
        width: '100%',
        backgroundColor: '#111111',
        padding: 10,
    },
    commentUser: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,

    },
    commentText: {
        color: 'grey',
        fontSize: 20,
        marginLeft: 10,
        marginVertical: 15
    },
    s31: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    }

})