import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class HomeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        ['Gênero', 'Editora'],
        ['Fundação', '1939 (como Timely Comics)'],
        ['Fundador(es) ', 'Martin Goodman'],
        [
          'Proprietário(s)',
          '135 W. 50th Street, Nova York, NY, Estados Unidos',
        ],
        ['Presidente ', 'Kevin Feige'],
        [
          'Pessoas-chave',
          'The Walt Disney Company, dona da Marvel Entertainment, LLC, companhia à qual pertence a Marvel Comics. ',
        ],
        ['Produtos', 'Revistas, livros e filmes'],
        ['Renda líquida', 'US$326.3 milhões (2015)'],
        ['Website oficial', 'www.marvel.com'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#a50000' }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 10 },
  head: { height: 10 },
  text: { margin: 6, fontFamily: 'Bangers-Regular' },
});
