---
title: radix primitives로 모달 접근성 고려하기
date: 2025-03-17
---

![모달](/images/alert-dialog.png)

모달을 구현할 때 접근성을 준수하기 위해 생각보다 많은 부분을 고려해야 할 수 있습니다. 웹 접근성 가이드라인을 제공해주는 WAI의 [WAI patterns](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal)에서는 다음과 같은 내용이 포함되어 있습니다.

- 모달이 열렸을 때, 첫 번째 포커스 가능한 요소로 포커스가 이동해야 합니다.
- 포커스가 모달 안에서만 돌아야 합니다.
- ESC로 모달을 닫을 수 있어야 합니다.
- 모달이 닫혔을 때, 모달을 열었던 요소로 포커스가 이동해야 합니다.
- 모달을 여는 버튼에 `aria-haspopup=dialog` 속성이 존재해야 합니다.
- 모달에 `role=dialog` 속성이 존재해야 합니다.
- 유저에게 중요한 메시지를 전달하는 역할이라면 `role=alertdialog` 속성을 사용해야 합니다.
- 모달에 `aria-modal=true` 속성이 존재해야 합니다.
- 모달에 `aria-labelledby` 혹은 `aria-label`를 사용해 타이틀을 표시해주어야 합니다.
- (선택) `aria-describedby`를 사용해 모달에 대한 설명을 표시해주어야 합니다.

특히, 포커스를 모달 안으로 가두는 `Focus Scope` (혹은 `Focus Trap`)는 직접 구현한다고 하면 조금 까다로울 수 있습니다. 이러한 부분들을 담당해주는 헤드리스 라이브러리들이 많이 나와있는데 (Base UI, Headless UI, React Aria, Ariakit 등), 저는 개인적으로 Radix primitives의 `Dialog` 컴포넌트를 자주 사용하고 있습니다. 다른 Radix primitives의 컴포넌트들과 잘 통합되고 `asChild` props 기반의 렌더링 위임 기능이 강력해서 장점이 분명한 라이브러리입니다.

아래는 제가 라이브러리를 사용해보며 겪었던 접근성 관련 이슈들입니다.

- 모달이 닫혀있을 때에도 모달을 여는 버튼에 `aria-controls` 속성이 존재하기 때문에 접근성 가이드라인에 위배될 수 있습니다.
- 모달에 `aria-modal=true` 속성을 직접 추가해야 합니다.

## 드랍다운과 함께 사용하기

![프로필 메뉴 드랍다운](/images/profile-menu-dropdown.png)

모달을 드랍다운과 함께 사용한다고 하면 약간 복잡해집니다. 예를 들어, 드랍다운을 여는 버튼이 존재하고 드랍다운 메뉴를 클릭했을 때 드랍다운이 닫히면서 모달이 열리는 UI를 생각해 볼 수 있습니다. 모달이 닫히면 드랍다운 메뉴 버튼이 아닌 드랍다운을 열었던 버튼으로 포커스가 이동해야 합니다. 키보드 사용자들이 모달을 닫고 탭 키를 눌러 바로 다음 컨텐츠를 탐색할 수 있도록 하기 위함입니다. 다른 라이브러리인 Base ui에서는 비슷한 [케이스](https://base-ui.com/react/components/dialog#open-from-a-menu)를 다루고 있습니다. Radix에서는 기본적으로 모달이 닫혔을 때 Trigger로 포커스가 이동하기 때문에 컴포넌트에 로직을 추가하여 이 문제를 해결할 수 있습니다.

```ts
const { triggerRef } = useDialogContext();

useEffect(() => {
  if (!triggerRef) return;

  const triggerElement = triggerRef.current;

  return () => {
    triggerElement?.focus();
  };
}, [triggerRef]);
```

```tsx
const triggerRef = useRef<HTMLButtonElement>(null);

return <DropdownMenu.Trigger ref={triggerRef}>드랍다운 열기</DropdownMenu.Trigger>;
```

```tsx
<Dialog triggerRef={triggerRef}>...</Dialog>
```
