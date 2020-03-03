import React from 'react';
import ReactAutocomplete from 'react-autocomplete';
import styled from 'styled-components';

class SearchProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <Container>
        <ReactAutocomplete
          items={[
            { id: 'DDos', label: 'DDos' },
            { id: 'EdgeServices', label: 'Edge Services' },
            { id: 'ACX2000', label: 'ACX2000' },
            { id: 'ACX2200', label: 'ACX2200' },
            { id: 'ACX4000', label: 'ACX4000' },
            { id: 'ACX500', label: 'ACX500' },
            { id: 'ACX1000', label: 'ACX1000' },
            { id: 'BizReflex', label: 'BizReflex' },
            { id: 'C400', label: 'C400' },
            { id: 'EdgeServicesDirector', label: 'Edge Services Director' },
            { id: 'LN1000', label: 'LN1000 (EOL)' },
            { id: 'OpenConfig', label: 'OpenConfig' },
          ]}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.label}
          renderItem={(item, highlighted) =>
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
            >
              {item.label}
            </div>
          }
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={value => this.setState({ value })}
        />
        <button>Search Products</button>
      </Container>

    )
  }
}

export default SearchProduct;

const Container = styled.div`
  margin-top:40px;
  div {
    width:80%;
  }
  input {
    width:100%;
  }
`;