export const validate = config => (values, props) => {
  var errors = {}
  for (const configKey in config) {
    let keys = configKey.split('.')
    // 横断的にバリデーションを行う
    traverse(values, keys, config[configKey], errors)
  }
  return errors
}

/**
 * 横断バリデーション
 */
function traverse(values, keys, validations, errors = {}) {
  // バリデーション設定キーが存在する場合(root node / inner node)
  if (keys.length > 0) {
    // 配列識別文字列[]を削除
    const _key = keys[0].replace(/\[]/g, '')
    // まだ対象キーの階層にエラーが存在しない場合、初期化
    if (errors[_key] === undefined) {
      errors[_key] = {}
    }

    // バリデーション対象のフィールドに値が存在しない場合（フォーム初期化直後等）
    if (values === undefined || values[_key] === undefined) {

      // フィールドキーから判断して、対象のフィールドが配列となりうる場合
      if (keys[0].indexOf('[') > 0) {
        // インデックス0でバリデーションエラーを登録する
        errors[_key] = [{}]
        // 再帰的にバリデーション
        errors[_key][0] = traverse(undefined, keys.slice(1), validations, errors[_key][0])
        // エラーが無かった場合は、エラーオブジェクトのkeyごと削除
        // 残ってるとエラーがあるとredux-formに判断される
        if (errors[_key][0] && Object.keys(errors[_key][0]).length < 1) delete errors[_key][0]
      } else {
        // 再帰的にバリデーション
        errors[_key] = traverse(undefined, keys.slice(1), validations, errors[_key])
        // エラーが無かった場合は、エラーオブジェクトのkeyごと削除
        if (errors[_key] && Object.keys(errors[_key]).length < 1) delete errors[_key]
      }
    } else {
      // 値が存在する場合
      if (values[_key] instanceof Array) {
        errors[_key] = []
        // 値が配列の場合、各インデックスをバリデーション
        for (let [index, value] of values[_key].entries()) {
          errors[_key].push({})
          // 再帰的にバリデーション
          errors[_key][index] = traverse(value, keys.slice(1), validations, errors[_key][index])
          // エラーが無かった場合は、エラーオブジェクトのkeyごと削除
          if (errors[_key][index] && Object.keys(errors[_key][index]).length < 1) delete errors[_key][index]
        }
      } else if (values[_key] instanceof Object) {
        // 値がオブジェクトの場合
        // 子要素を再帰的にバリデーション
        errors[_key] = traverse(values[_key], keys.slice(1), validations, errors[_key])
        // エラーが無かった場合は、エラーオブジェクトのkeyごと削除
        if (errors[_key] && Object.keys(errors[_key]).length < 1) delete errors[_key]
      } else {
        // 値がプリミティブの場合（入力値 / 未入力でオブジェクトが存在していない）
        errors[_key] = traverse(values[_key], keys.slice(1), validations, errors[_key])
        // エラーが無かった場合は、エラーオブジェクトのkeyごと削除
        if (errors[_key] && Object.keys(errors[_key]).length < 1) delete errors[_key]
      }
    }
  } else {
    // leaf nodeの場合
    errors = []
    // 対象フィールドのバリデーション設定に基づきバリデーションを行う
    for (const type in validations) {
      if (Validates[type] && !Validates[type](values, validations[type])) {
        const msg = ErrorMessages[type]
        if (msg) errors.push(msg)
      }
    }
  }

  return errors
}

export const ErrorMessages = {
  required: "必須項目です。",
  email: "Emailの形式が正しくありません。",
  password: "英字、数字を組み合わせた8文字以上で入力してください。",
}

export const Validates = {
  required: (value, prop) => {
    return prop ? value !== undefined && value !== null && value.toString().length > 0 : true
  },
  email: (value, prop) => {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
  },
  password: (value, prop) => {
    return /^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/.test(value)
  }
}
