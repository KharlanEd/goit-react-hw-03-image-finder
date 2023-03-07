import { Component } from "react";
import css from "components/styles.module.css"

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export class Searchbar extends Component {
    state = {
        imgName:'',
    }

    nameChange = e => {
        this.setState({ imgName: e.currentTarget.value.toLowerCase() })

        
    }

    nameSabmit = e => {
        e.preventDefault();

        if (this.state.imgName.trim() === '') {
            toast.error('Ведіть значення')
            return
        }
        this.props.onSubmit(this.state.imgName)

        this.setState({imgName:''})
        
    }

    

    render() {
        return (
    <header className={css.Searchbar}>
        <form className={css.SearchForm}
            onSubmit={this.nameSabmit}
                >
        <button type="submit" className={css.SearchForm_button}>
            <span className={css.button_label}>Search</span>
        </button>

        <input
         className={css.SearchForm_input}
         type="text"
         value={this.state.imgName}
        placeholder="Search images and photos"
        onChange={this.nameChange}                
    />
  </form>
</header>
        )
    }
}