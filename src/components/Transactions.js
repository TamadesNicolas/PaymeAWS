import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Transaction } from '../models';
import { DataStore } from 'aws-amplify';

export default function App() {

    const [transactions, setTransactions] = useState([]);


    useEffect(() => {
        const subscription = DataStore.observeQuery(Transaction).subscribe((snapshot) => {
            const { items, isSynced } = snapshot;
            setTransactions(items);
            console.log("transactiobns" + items.length);
            console.log("items " + JSON.stringify(items))
        });

        //unsubscribe to data updates when component is destroyed so that you don’t introduce a memory leak.
        return function cleanup() {
            subscription.unsubscribe();
        }

    }, []);

    function renderItem({ item }) {
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log("press")}>
                    <Text>{item.from} {item.to} {item.amount} {item.createdAt}</Text>
                </TouchableOpacity>
            </View>

        );
    }

    return (

        <View >
            <FlatList
                data={transactions}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    button: {
        borderWidth: 0,
        borderColor: "#000000",
        borderRadius: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        marginBottom: "2%"
    },
});
