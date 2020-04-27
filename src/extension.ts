import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const vertical = vscode.commands.registerCommand(
    "smart.split.vertical",
    async () => {
      const doc = await vscode.workspace.openTextDocument();
      await vscode.window.showTextDocument(doc, {
        viewColumn: vscode.ViewColumn.Beside,
      });
      vscode.commands.executeCommand("workbench.action.quickOpen");
    }
  );

  const horizontal = vscode.commands.registerCommand(
    "smart.split.horizontal",
    async () => {
      const doc = await vscode.workspace.openTextDocument();
      await vscode.commands.executeCommand("workbench.action.splitEditorDown");
      await vscode.window.showTextDocument(doc, {
        preview: true
      });
      await vscode.commands.executeCommand("workbench.action.nextEditorInGroup");
      await vscode.commands.executeCommand(
        "workbench.action.closeActiveEditor"
      );
      await vscode.commands.executeCommand("workbench.action.quickOpen");
      // await vscode.commands.executeCommand(
      //   "workbench.action.closeActiveEditor"
      // );
    }
  );

  context.subscriptions.push(vertical);
  context.subscriptions.push(horizontal);
}

// this method is called when your extension is deactivated
export function deactivate() {}
