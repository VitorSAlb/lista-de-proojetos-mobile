import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        borderWidth: 1,
        borderColor: '#574F4D',
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    box: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#574F4D',
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 10,
        marginTop: 10,
    },
    titleBox: {
        color: '#FAFAFA',
        fontSize: 18,
        marginBottom: 10,
    },
    infoList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    infoItem: {
        backgroundColor: '#E0E0E0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 5,
    },
    TOContaniner: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNP: {
        backgroundColor: '#FAFAFA',
        padding: 5,
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '90%',
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
    },
    inputDescribe: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
        textAlignVertical: 'top',
        minHeight: 100,
        maxHeight: 'auto',
    },
    addInfoBtn: {
        color: '#007BFF',
        marginBottom: 10,
        width: '100%'
    },
    addCard: {
        width: '100%',
        backgroundColor: 'lightgreen',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        paddingVertical: 12,
    },
    addCardText: {
        color: '#000',
    },
    closeBtn: {
        width: '100%',
        backgroundColor: '#FF4F4F',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        paddingVertical: 12,
    },
    topo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    excluirBtn: {
        // borderColor: 'red',
        // borderWidth: 1,
        padding: 10
    },
    excluirBtnText: {
        color: '#FAFAFA',
    },
    MaxWidth: {
        width: '100%'
    }
});
