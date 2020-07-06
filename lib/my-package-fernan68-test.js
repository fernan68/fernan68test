'use babel';

import MyPackageFernan68TestView from './my-package-fernan68-test-view';
import { CompositeDisposable } from 'atom';

export default {

  myPackageFernan68TestView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.myPackageFernan68TestView = new MyPackageFernan68TestView(state.myPackageFernan68TestViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.myPackageFernan68TestView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'my-package-fernan68-test:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.myPackageFernan68TestView.destroy();
  },

  serialize() {
    return {
      myPackageFernan68TestViewState: this.myPackageFernan68TestView.serialize()
    };
  },

  toggle() {
    console.log('MyPackageFernan68Test was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
