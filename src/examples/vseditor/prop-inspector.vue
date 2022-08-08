<script>
import PropCheckInputVue from './prop-check-input.vue'
import PropGridInputVue from './prop-grid-input.vue'
import PropNumberInputVue from './prop-number-input.vue'
import PropRadioInputVue from './prop-radio-input.vue'
const PropInputImpl = {
  grid: PropGridInputVue,
  radio: PropRadioInputVue,
  number: PropNumberInputVue,
  checkbox: PropCheckInputVue,
}
export default {
  props: ['controlled'],
  data() {
    return {
      inputs: [
        { type: 'number', name: 'x' ,name1:'位置横坐标'},
        { type: 'number', name: 'y' ,name1:'位置纵坐标'},
        { type: 'number', name: 'width' ,name1:'宽度'},
        { type: 'number', name: 'height' ,name1:'高度'},
        { type: 'number', name: 'rotation' ,name1:'倾斜程度'},
        { type: 'number', name: 'minWidth' ,name1:'缩放最小宽度'},
        { type: 'number', name: 'minHeight' ,name1:'缩放最小高度'},
        { type: 'grid', name: 'grid' ,name1:'方格大小'},
        {
          type: 'radio',
          name: 'axis',
          name1:'指定轴拖动',
          options: [{ label: 'y', value: 'y' }, { label: 'x', value: 'x' }, { label: 'xy', value: 'xy' }],
        },
        { type: 'checkbox', name: 'acceptRatio' ,name1:'固定纵横比'},
        { type: 'checkbox', name: 'draggable' ,name1:'是否可拖拽'},
        { type: 'checkbox', name: 'resizable' ,name1:'是否可缩放'},
        { type: 'checkbox', name: 'rotatable' ,name1:'是否可旋转'},
        { type: 'checkbox', name: 'active' ,name1:'是否可用'},
        { type: 'checkbox', name: 'parent' ,name1:'限制在容器内'},
      ],
      extraInputs: [{ type: 'text', name: 'value' ,name1:'内容'}, { type: 'text', name: 'label' }],
    }
  },
  methods: {
    customChange(e, item) {
      this.$emit('change', {
        ...item,
        value: e,
      })
    },
    extraChange(e, item) {
      this.$emit('change', {
        ...item,
        value: e.target.value,
        checked: e.target.checked,
        extra: true,
      })
    },
  },
  render() {
    return (
      <div class="vs-inspector">
        <div>组件选项</div>
        {this.inputs.map((item) => {
          let DyInput = PropInputImpl[item.type]
          return (
            <div class="input-item" key={item.name}>
              <label class="input-label">{item.name1}</label>
              <DyInput
                options={item.options}
                value={this.controlled[item.name]}
                onInput={(e) => this.customChange(e, item)}
              />
            </div>
          )
        })}

        <div></div>
        {this.controlled &&
          this.controlled.extra &&
          this.extraInputs
            .filter((item) => item.name in this.controlled.extra)
            .map((item) => {
              return (
                <div class="input-item" key={item.name}>
                  <label class="input-label">{item.name1}</label>
                  <input
                    onInput={(e) => this.extraChange(e, item)}
                    class="input-value"
                    type={item.type}
                    checked={this.controlled.extra[item.name]}
                    value={this.controlled.extra[item.name]}
                  />
                </div>
              )
            })}
      </div>
    )
  },
}
</script>

<style lang="less">
.vs-inspector {
  width: 240px;
  border-left: 1px solid #ececec;
  background: #f8f8f8;
  padding: 15px;
  overflow-y: auto;
  .input-item {
    margin-bottom: 12px;
    display: flex;
  }
  .input-label {
    display: inline-block;
    width: 100px;
    color: #555;
  }
  .input-value:not([type='checkbox']) {
    height: 24px;
    padding: 0;
    border-radius: 0;
    border: 1px solid #d3d3d3;
    padding-left: 10px;
    flex: 1;
    width: 0;
  }
}
</style>
