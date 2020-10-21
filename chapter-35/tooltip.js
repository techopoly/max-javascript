class Tooltip extends HTMLElement {
    constructor() {
        super()
        console.log('Its is working');
        this.tooltipIcon;
        this.tooltipText = 'some dummy placeholder'
    }
    connectedCallback(){
        if(this.hasAttribute){
            this.tooltipText = this.getAttribute('text');
        }
        this.tooltipIcon = document.createElement('span');
        this.tooltipIcon.textContent = '(created at first) ';
        this.appendChild(this.tooltipIcon);
        this.tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        this.tooltipIcon.addEventListener('mouseleave', this._removeTooltip.bind(this))
    }

    _showTooltip(){
        this._tooltipContanier = document.createElement('span');
        this._tooltipContanier.textContent = this.tooltipText;
        this.appendChild(this._tooltipContanier);
    } 

    _removeTooltip(){
        this.removeChild(this._tooltipContanier);
    }
}

customElements.define('uc-tooltip', Tooltip);




